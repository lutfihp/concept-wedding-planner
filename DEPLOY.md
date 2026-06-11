# Deployment Guide

**Site:** `https://concept-wedding-planner.codading.site`
**VPS path:** `/var/www/concept-wedding-planner`
**Transfer tool:** FileZilla (SFTP)

---

## First Deploy (one-time setup)

### 1. Build locally

```bash
npm run build
```

Output is written to `out/`. Verify the build succeeded — no errors in terminal output.

Optional smoke-test before uploading:

```bash
npx serve out
```

Open `http://localhost:3000` and check the site looks correct, then `Ctrl+C` to stop.

### 2. Create the directory on VPS

SSH into the VPS and run:

```bash
sudo mkdir -p /var/www/concept-wedding-planner
sudo chown -R www-data:www-data /var/www/concept-wedding-planner
sudo chmod -R 755 /var/www/concept-wedding-planner
```

### 3. Upload via FileZilla

1. Open FileZilla
2. Connect: **Protocol** SFTP, **Host** your VPS IP, **Port** 22, your SSH username and password/key
3. Remote panel: navigate to `/var/www/concept-wedding-planner`
4. Local panel: navigate to the `out/` folder inside this project
5. Select **all files and folders inside `out/`** (not the `out/` folder itself)
6. Drag them to the remote panel — wait for upload to complete

### 4. Create nginx config

On the VPS, create `/etc/nginx/sites-available/concept-wedding-planner`:

```bash
sudo nano /etc/nginx/sites-available/concept-wedding-planner
```

Paste this config:

```nginx
server {
    listen 80;
    server_name concept-wedding-planner.codading.site;

    root /var/www/concept-wedding-planner;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Long-lived cache for versioned Next.js static assets
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X`).

### 5. Enable the site and reload nginx

```bash
sudo ln -s /etc/nginx/sites-available/concept-wedding-planner /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

`nginx -t` must say `syntax is ok` and `test is successful` before reloading.

### 6. Get HTTPS certificate

```bash
sudo certbot --nginx -d concept-wedding-planner.codading.site
```

Certbot will automatically edit the nginx config to add SSL and the HTTP→HTTPS redirect. When prompted, choose to redirect all HTTP traffic to HTTPS.

### 7. Verify

Open `https://concept-wedding-planner.codading.site` in a browser. Check:
- Site loads correctly over HTTPS
- Browser shows a valid padlock (no certificate warnings)
- All sections render and images load

---

## Re-deploy (every future change)

Use this section every time you edit the site and want to push changes live.

### 1. Edit and rebuild

Make your code changes, then:

```bash
npm run build
```

Verify the build completes with no errors.

### 2. Clear old files on VPS via FileZilla

> **Important:** Always clear before uploading. Next.js `_next/static/` uses content-hashed filenames — old hashed files accumulate silently if you only overwrite.

1. Open FileZilla and connect (SFTP, VPS IP, port 22)
2. Navigate remote to `/var/www/concept-wedding-planner`
3. Select all files and folders in the remote directory
4. Right-click → **Delete** — confirm deletion
5. Wait for the remote directory to be empty

### 3. Upload fresh build

1. Navigate local panel to the `out/` folder inside this project
2. Select **all files and folders inside `out/`** (not the `out/` folder itself)
3. Drag to the now-empty remote `/var/www/concept-wedding-planner`
4. Wait for upload to complete

### 4. Reload nginx (optional)

nginx serves static files directly — a reload is usually not needed for pure content changes. Run it anyway as a safety step:

```bash
sudo systemctl reload nginx
```

### 5. Verify

Open `https://concept-wedding-planner.codading.site` in a browser and do a hard refresh (`Ctrl+Shift+R`) to bypass local browser cache. Confirm your changes are live.
