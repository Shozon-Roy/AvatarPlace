# 🖼️ AvatarPlace

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Your Perfect Avatar Awaits** is a simple, fast, and free image placeholder service to generate beautiful placeholder avatars for your projects, mockups, and designs.

➡️ **Live Demo:** [https://avatarplace.vercel.app/](https://avatarplace.vercel.app/)

![Screenshot of the AvatarPlace website](https://placehold.co/800x400/EFEFEF/333333?text=AvatarPlace+Demo)

*(Tip: Replace the placeholder image above with a real screenshot of your app!)*

## ✨ Features

* 🚀 **Lightning Fast:** Built on a modern, edge-optimized infrastructure for instant image delivery.
* 💰 **Completely Free:** No sign-ups, no API keys, no hidden costs. Just use it.
* 🎨 **Multiple Formats:** Generate placeholders in **SVG, PNG, JPEG, GIF, WebP, and AVIF**.
* 🎯 **Perfect for Avatars:** Specifically designed to create clean and simple placeholder avatars.
* ✨ **Customizable:** Easily change the dimensions, background color, text, and text color via the URL.

## 🚀 How to Use

Using AvatarPlace is as simple as constructing a URL. The basic structure is:

```
https://avatarplace.vercel.app/[width]/[height].[format]?[parameters]
```

### Basic Examples

Just specify the width, height, and desired image format.

**PNG Image (300x300)**
```
https://avatarplace.vercel.app/300/300.png
```
![300x300 PNG](https://avatarplace.vercel.app/300/300.png)

**JPEG Image (150x150)**
```
https://avatarplace.vercel.app/150/150.jpeg
```
![150x150 JPEG](https://avatarplace.vercel.app/150/150.jpeg)

**SVG Image (100x100)**
```
https://avatarplace.vercel.app/100/100.svg
```
![100x100 SVG](https://avatarplace.vercel.app/100/100.svg)

**WebP Image (250x250)**
```
https://avatarplace.vercel.app/250/250.webp
```
![250x250 WebP](https://avatarplace.vercel.app/250/250.webp)

### Advanced Customization

You can customize the placeholder by adding query parameters to the URL.

| Parameter | Description                              | Example                         | Default          |
|-----------|------------------------------------------|---------------------------------|------------------|
| `text`    | The text to display on the image         | `?text=Hello`                   | `width`x`height` |
| `bg`      | The background color (hex code)          | `?bg=000000`                    | `CCCCCC`         |
| `color`   | The text color (hex code)                | `?color=ffffff`                 | `666666`         |

**Custom Text and Colors**

```
https://avatarplace.vercel.app/200/200.png?text=SR&bg=333333&color=ffffff
```
![Custom Text and Colors](https://avatarplace.vercel.app/200/200.png?text=SR&bg=333333&color=ffffff)

## 🛠️ Technology Stack

This project is built with modern and efficient web technologies:

* **[Next.js](https://nextjs.org/)** - The React framework for production
* **[Vercel](https://vercel.com/)** - Deployment and hosting platform
* **[Sharp](https://sharp.pixelplumbing.com/)** - High-performance image processing

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Developed By Shozon Roy

* **Website:** [https://avatarplace.vercel.app/](https://avatarplace.vercel.app/)
* **GitHub:** [https://github.com/shozon-roy](https://github.com/shozon-roy)

---

**Explore the collection and start building!** 🎉
