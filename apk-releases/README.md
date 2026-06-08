# APK Releases

Letakkan file APK di folder ini sebelum upload ke GitHub Releases.

## URL Pattern GitHub Release

```
https://github.com/indriyatikoe80-ops/indriyatikoe80-ops.github.io/releases/download/v{VERSION}/app-release.apk
```

Contoh untuk versi 1.0.0:
```
https://github.com/indriyatikoe80-ops/indriyatikoe80-ops.github.io/releases/download/v1.0.0/app-release.apk
```

## Langkah update APK

1. Ganti APK lama dengan APK baru di folder ini
2. Buat release baru di GitHub: https://github.com/indriyatikoe80-ops/indriyatikoe80-ops.github.io/releases/new
3. Upload APK sebagai asset release dengan tag versi baru (misal: v1.0.1)
4. Update `src/data/content.ts` -> `apkUrl` dengan URL release baru
5. Build dan deploy: `npm run build && npx gh-pages -d dist -m "Deploy"`
