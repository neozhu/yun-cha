## 项目简介

云茶 Yun Chá 高端茶礼/办公室茶席单页，使用 Next.js App Router + Tailwind，风格为明亮琥珀/奶油系，突出红茶、乌龙、普洱的礼赠与办公场景。页面包含：英雄区、茶款合集、礼赠/办公室方案、风味流程以及订购联系表单（Formspree 占位）。

## 快速开始

```bash
pnpm install
pnpm dev
# 浏览器访问 http://localhost:3000
```

开发时主要编辑：
- `app/page.tsx`：页面内容与区块。
- `app/globals.css`：配色、字体（Playfair Display/Manrope）和全局渐变背景。
- `app/layout.tsx`：站点元信息与字体加载。

## 自定义与素材

- 图片：在 `public/tea/` 放置真实茶园/茶器照片，替换 `page.tsx` 中的占位路径。
- 配色：在 `app/globals.css` 中调整 `--ink / --amber / --brass` 等变量即可更新主题。
- 文案：直接修改 `signatureTeas`、`services`、`rituals` 数据，以符合实际茶款与服务。

## 表单与提交

订购表单当前指向 Formspree 占位 `https://formspree.io/f/your-form-id`。请替换为：
- 你的 Formspree ID，或
- 自建 API 路由（例如 `app/api/contact/route.ts`）对接邮件/CRM，再将 `action` 指向该接口。

## 脚本

```bash
pnpm dev      # 本地开发
pnpm lint     # 代码检查
```

## 部署

可直接部署到 Vercel 或任意支持 Next.js 的平台。生产环境建议设置自定义域名，并为表单/邮件服务配置所需的密钥。*** End Patch
