import Image from "next/image";

const signatureTeas = [
  {
    name: "金骏眉 · Reserve",
    region: "武夷山 · 红茶",
    notes: "可可与山蜜，绵密焦糖甜感，绵长尾韵。",
    pairing: "高端礼赠 / 下午茶",
    image: "/tea/hongcha.png",
  },
  {
    name: "大红袍 · 炉火",
    region: "武夷岩茶 · 乌龙",
    notes: "岩韵矿香与焙火层次，辛香柑橘收尾。",
    pairing: "会客 / 餐后",
    image: "/tea/wulong.png",
  },
  {
    name: "冰岛 · 2021",
    region: "临沧 · 普洱生茶",
    notes: "兰花冷香，清甜回甘，喉韵悠长。",
    pairing: "冥想 / 品鉴",
    image: "/tea/puer.png",
  },
];

const services = [
  {
    title: "礼赠 · 私享礼盒",
    desc: "手作榫卯木盒，烫金手写礼卡，支持刻字/家徽。",
    bullets: ["甄选单株/小产区", "搭配汝窑/银壶茶器", "48小时内顺丰冷链"],
  },
  {
    title: "办公室 · 茶席",
    desc: "会议来访 / 日常下午茶，提升空间气质。",
    bullets: ["单杯挂耳 / 原叶冷萃", "茶吧台软装与陈列", "员工茶课与冲泡SOP"],
  },
  {
    title: "订阅 · 季度臻选",
    desc: "每季 3 款风味，含手冲指南与杯测卡。",
    bullets: ["红茶/乌龙/普洱自由搭配", "附水质/温度建议", "企业可开票/寄往多址"],
  },
];

const rituals = [
  {
    title: "山场遴选",
    detail: "武夷桐木关、凤凰单丛、冰岛老寨等源头直采，追溯茶园批次。",
  },
  {
    title: "火候演绎",
    detail: "18 年资深焙火师，控水活与含香，分段低温回火。",
  },
  {
    title: "静置醒茶",
    detail: "恒温恒湿窖藏 14 天，风味稳定后封缄，附冲泡曲线。",
  },
];

const highlights = [
  { label: "庄园直供", value: "9 个", note: "签约核心山场" },
  { label: "礼盒客单", value: "¥980+", note: "定制刻字/配饰" },
  { label: "办公室", value: "26 家", note: "精品办公室茶席" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fdf7ed] text-[#24170f]">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#f0e3cc]/80 blur-3xl" />
        <div className="absolute bottom-10 right-[-10%] h-80 w-80 rounded-full bg-[#d6b679]/50 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9b284] to-transparent" />
      </div>

      <header className="sticky top-0 z-30 border-b border-[#e5d7bf] bg-[#fffaf1]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#d8a64b] via-[#f0d59a] to-[#b3771d] shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#b3771d]">Yun Chá</p>
              <p className="text-sm text-[#54412f]">云茶 · 高端茶礼</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm text-[#5a4837] md:flex">
            <span>红茶 · 乌龙 · 普洱</span>
            <span>礼赠 / 办公室</span>
            <span>定制刻字</span>
          </div>
          <a
            className="rounded-full border border-[#d8a64b]/70 bg-[#f7e5c4] px-4 py-2 text-sm font-medium text-[#4a3317] transition hover:-translate-y-[1px] hover:border-[#c2872a] hover:shadow-lg hover:shadow-[#e8c98a]/50"
            href="#contact"
          >
            预约品鉴
          </a>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:space-y-16">
        <section className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:gap-10">
          <div className="space-y-5 sm:space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[#b3771d]">
              高山红茶 · 岩韵乌龙 · 年份普洱
            </p>
            <h1 className="font-[var(--font-display)] text-3xl leading-tight text-[#1c130d] sm:text-4xl lg:text-6xl">
              云茶 · Yun Chá
              <span className="block text-2xl font-normal leading-tight text-[#6a5340] sm:text-[32px] lg:text-[40px]">
                致敬送礼与办公室的茶礼美学
              </span>
            </h1>
            <p className="max-w-2xl text-base text-[#5a4837] sm:text-lg">
              甄选武夷桐木关、凤凰单丛、冰岛老寨等山场；手工焙火与恒温醒茶，将茶的层次、礼节与空间气质，化作一杯好茶。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#d8a64b] px-5 py-3 text-sm font-semibold text-[#3b240b] shadow-lg shadow-[#e6c07a]/40 transition hover:-translate-y-[1px]"
              >
                订购与定制
              </a>
              <a
                href="#collections"
                className="rounded-full border border-[#e0cda7] px-5 py-3 text-sm font-semibold text-[#3c2b1e] transition hover:-translate-y-[1px] hover:border-[#d8a64b] hover:bg-[#f7e7c9]"
              >
                查看茶单
              </a>
            </div>
            <div className="grid gap-4 text-sm text-[#5a4837] sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#e8ddc6] bg-white px-3 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:px-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[#b3771d]">{item.label}</p>
                  <p className="mt-1 text-2xl font-semibold text-[#c2872a]">{item.value}</p>
                  <p>{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#e3d4b9] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <Image
              src="/tea/hero.png"
              alt="茶席与茶器氛围"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#fbf2e2]/85 to-[#fdf7ed]" />
            <div className="absolute inset-0 flex flex-col justify-between p-8 text-[#4c3928]">
              <div className="flex justify-end">
                <div className="rounded-full bg-[#f7e7c9] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#6a4a1f] shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
                  本月甄选
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-[#715c48]">山场风味线索</p>
                <h3 className="font-[var(--font-display)] text-3xl text-[#2b1c13]">桐木关·金骏眉 Reserve</h3>
                <p className="text-[#5a4837]">
                  260 小时匀火烘焙，焦糖与山蜜香交叠；附 3 段冲泡曲线，适配软水/硬水。
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-[#e8ddc6] bg-white/90 px-4 py-3">
                    <p className="text-xs text-[#7a6756]">推荐冲泡</p>
                    <p className="text-base font-semibold text-[#c2872a]">92℃ · 6g · 100ml</p>
                    <p className="text-[#7a6756]">前 2 泡低位注水，保留绵密甜香</p>
                  </div>
                  <div className="rounded-2xl border border-[#e8ddc6] bg-white/90 px-4 py-3">
                    <p className="text-xs text-[#7a6756]">适合场景</p>
                    <p className="text-base font-semibold text-[#c2872a]">高端礼赠 / 会客</p>
                    <p className="text-[#7a6756]">支持手写礼卡与定制刻字</p>
                  </div>
                </div>
                <div className="flex gap-3 text-xs text-[#6a5340]">
                  <span className="rounded-full border border-[#e5d7bf] bg-white/80 px-3 py-1">岩韵 · 焦糖</span>
                  <span className="rounded-full border border-[#e5d7bf] bg-white/80 px-3 py-1">冷萃可选</span>
                  <span className="rounded-full border border-[#e5d7bf] bg-white/80 px-3 py-1">限量 60 盒</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b3771d]">Collections</p>
              <h2 className="font-[var(--font-display)] text-3xl text-[#1c130d] sm:text-4xl">三大风味线</h2>
              <p className="text-[#5a4837]">红茶、乌龙、普洱，均附冲泡指南与杯测卡。</p>
            </div>
            <a
              href="#contact"
              className="text-sm text-[#b3771d] underline-offset-4 hover:text-[#8a5a1a] hover:underline"
            >
              索要完整茶谱
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {signatureTeas.map((tea) => (
              <div
                key={tea.name}
                className="group relative overflow-hidden rounded-3xl border border-[#e8ddc6] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:border-[#d8a64b]/60 hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-36 w-full overflow-hidden md:h-44">
                  <Image src={tea.image} alt={tea.name} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fdf7ed]/70 opacity-80" />
                </div>
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#f3e3c4]/70 to-transparent" />
                </div>
                <div className="space-y-3 px-5 pb-5 pt-4 md:px-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#b3771d]">{tea.region}</p>
                  <h3 className="font-[var(--font-display)] text-2xl text-[#23160f]">{tea.name}</h3>
                  <p className="text-sm text-[#5a4837]">{tea.notes}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-[#6a5340]">
                    <span className="rounded-full border border-[#e5d7bf] px-3 py-1">手工拣剔</span>
                    <span className="rounded-full border border-[#e5d7bf] px-3 py-1">单株采摘</span>
                    <span className="rounded-full border border-[#e5d7bf] px-3 py-1">附水质指南</span>
                  </div>
                  <p className="text-sm font-semibold text-[#c2872a]">{tea.pairing}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-[#e8ddc6] bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b3771d]">For Gift & Office</p>
            <h2 className="font-[var(--font-display)] text-3xl text-[#1c130d]">礼赠与办公室方案</h2>
            <p className="text-[#5a4837]">
              从定制礼盒到办公室茶席/冷萃，提供整套茶叶、茶器、冲泡 SOP 与空间陈列方案。
            </p>
            <div className="relative overflow-hidden rounded-2xl border border-[#e8ddc6] bg-[#fdf7ed] shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
              <Image
                src="/tea/office.png"
                alt="办公室茶席氛围"
                width={1600}
                height={900}
                className="h-36 w-full object-cover md:h-44"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {services.slice(0, 2).map((svc) => (
                <div key={svc.title} className="rounded-2xl border border-[#eee3ce] bg-[#fdf7ed] p-5">
                  <h3 className="text-xl font-semibold text-[#c2872a]">{svc.title}</h3>
                  <p className="mt-1 text-sm text-[#6a5340]">{svc.desc}</p>
                  <ul className="mt-3 space-y-2 text-sm text-[#5a4837]">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c2872a]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-[#d8a64b]/40 bg-[#f7e5c4] p-5 text-sm text-[#3b240b] shadow-inner">
              <p className="font-semibold">办公室提升</p>
              <p className="mt-1">
                提供软硬水冲泡曲线、温控壶/沙漏/茶盘搭配、冷萃大壶方案，员工可快速复刻。
              </p>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-[#e8ddc6] bg-gradient-to-b from-[#fbf2e2] to-[#f3e3c4] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b3771d]">Process</p>
            <h3 className="font-[var(--font-display)] text-2xl text-[#1f140e]">风味标准作业</h3>
            <div className="space-y-3">
              {rituals.map((step, index) => (
                <div key={step.title} className="flex gap-3 rounded-2xl border border-[#efe4cf] bg-white p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7e5c4] text-sm font-semibold text-[#8a5a1a]">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#2b1c13]">{step.title}</p>
                    <p className="text-sm text-[#6a5340]">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-sm text-[#5a4837]">
              <p>· 可提供杯测表 & 茶曲线 PDF</p>
              <p>· 礼盒均附手写礼卡，最多 60 字</p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-8 rounded-3xl border border-[#e8ddc6] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] lg:grid-cols-[1.1fr,0.9fr]"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b3771d]">Contact & Order</p>
            <h2 className="font-[var(--font-display)] text-3xl text-[#1c130d]">预约试饮 / 订购表单</h2>
            <p className="text-[#5a4837]">
              告诉我们送礼/办公室的场景、预算与偏好，我们将 24 小时内回复方案与样品邮寄。
            </p>
            <ul className="space-y-2 text-sm text-[#6a5340]">
              <li>· 支持开票、多地址配送、礼卡定制</li>
              <li>· 可安排上门茶席/线上冲泡教学</li>
              <li>· 建议预算：¥380 - ¥2580 / 礼盒；办公方案按人次定价</li>
            </ul>
          </div>
          <form
            className="space-y-4 rounded-2xl border border-[#e8ddc6] bg-[#fbf6eb] p-6 shadow-inner"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-[#5a4837]">
                <span>姓名 / 公司</span>
                <input
                  className="w-full rounded-xl border border-[#e2d5be] bg-white px-4 py-3 text-sm text-[#2b1c13] placeholder:text-[#9b8a78] focus:border-[#c2872a] focus:outline-none"
                  name="name"
                  placeholder="王先生 / 云茶办公"
                  required
                />
              </label>
              <label className="space-y-2 text-sm text-[#5a4837]">
                <span>邮箱</span>
                <input
                  className="w-full rounded-xl border border-[#e2d5be] bg-white px-4 py-3 text-sm text-[#2b1c13] placeholder:text-[#9b8a78] focus:border-[#c2872a] focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-[#5a4837]">
                <span>联系方式</span>
                <input
                  className="w-full rounded-xl border border-[#e2d5be] bg-white px-4 py-3 text-sm text-[#2b1c13] placeholder:text-[#9b8a78] focus:border-[#c2872a] focus:outline-none"
                  name="phone"
                  placeholder="电话 / 微信"
                />
              </label>
              <label className="space-y-2 text-sm text-[#5a4837]">
                <span>场景</span>
                <select
                  className="w-full rounded-xl border border-[#e2d5be] bg-white px-4 py-3 text-sm text-[#2b1c13] focus:border-[#c2872a] focus:outline-none"
                  name="occasion"
                  defaultValue="礼赠"
                >
                  <option className="bg-white">礼赠</option>
                  <option className="bg-white">办公室</option>
                  <option className="bg-white">品鉴活动</option>
                  <option className="bg-white">其他</option>
                </select>
              </label>
            </div>
            <label className="space-y-2 text-sm text-[#5a4837]">
              <span>预算 / 人数</span>
              <input
                className="w-full rounded-xl border border-[#e2d5be] bg-white px-4 py-3 text-sm text-[#2b1c13] placeholder:text-[#9b8a78] focus:border-[#c2872a] focus:outline-none"
                name="budget"
                placeholder="例如：¥1500/礼盒；30 人办公室"
              />
            </label>
            <label className="space-y-2 text-sm text-[#5a4837]">
              <span>其他需求</span>
              <textarea
                className="w-full rounded-2xl border border-[#e2d5be] bg-white px-4 py-3 text-sm text-[#2b1c13] placeholder:text-[#9b8a78] focus:border-[#c2872a] focus:outline-none"
                name="message"
                rows={4}
                placeholder="喜欢的风味（焙火/花香/陈香）、交付时间、是否需要茶器/刻字"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-[#d8a64b] px-5 py-3 text-sm font-semibold text-[#3b240b] shadow-lg shadow-[#e6c07a]/40 transition hover:-translate-y-[1px]"
            >
              提交订购需求
            </button>
            <p className="text-xs text-[#7a6756]">
              表单默认使用 Formspree，替换 action 链接为你的 CRM/表单接口即可。
            </p>
          </form>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#e5d7bf] pt-6 text-sm text-[#6a5340]">
          <div>
            <p className="font-semibold text-[#2b1c13]">Yun Chá 云茶</p>
            <p>高山红茶 · 岩韵乌龙 · 年份普洱</p>
          </div>
          <div className="flex gap-6">
            <a className="hover:text-[#8a5a1a]" href="mailto:hello@yuncha.example.com">
              hello@yuncha.example.com
            </a>
            <a className="hover:text-[#8a5a1a]" href="#contact">
              预约品鉴
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
