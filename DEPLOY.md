# Deployment Guide

## Build

```bash
npm run build
```

Output is in `out/` — a fully static site with no server runtime required.

## Copy to VPS

```bash
scp -r out/* user@your-vps:/var/www/tresna/
```

## nginx config

```nginx
server {
    listen 80;
    server_name tresna.yourdomain.com;

    root /var/www/tresna;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Long-lived cache for versioned static assets
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Redirect HTTP → HTTPS (add after certbot setup)
    # return 301 https://$host$request_uri;
}
```

## On VPS after upload

```bash
sudo nginx -t && sudo systemctl reload nginx
```
