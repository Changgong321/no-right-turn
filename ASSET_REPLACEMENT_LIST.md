# 《禁止右转》后期素材补充与替换路径清单

本文件以当前工程实际文件和作品数据为准。所有路径相对于 `index.html` 所在目录。**直接双击 `index.html` 可以打开当前占位版**；仅在替换资源并接入展示代码后，相应新图片才会生效。

## A. 视频及通用视觉资产

| 路径 | 用途 | 当前状态 |
|---|---|---|
| `assets/opening/opening.mp4` | 序章开场 CG（播放完停留末帧） | 已存在，可后期替换 |
| `assets/opening/opening-poster.webp` | 视频预览/加载封面（需接入 poster 属性） | 待补充 |
| `assets/branding/exhibition-title.svg` | 展览标题视觉（如果后期需要） | 待补充 |
| `assets/branding/arrow-right.svg` | 独立的方向箭头矢量素材（可替换 CSS/SVG） | 待补充 |

## B. 艺术家档案图像（第二部分）

| 路径 | 艺术家 | 用途 |
|---|---|---|
| `assets/artists/lam/portrait.webp` | 威弗雷多·拉姆（Wifredo Lam） | 艺术家肖像/档案封面，需确认图像授权 |
| `assets/artists/matta/portrait.webp` | 罗伯托·马塔（Roberto Matta） | 艺术家肖像/档案封面，需确认图像授权 |
| `assets/artists/vigas/portrait.webp` | 奥斯瓦尔多·维加斯（Oswaldo Vigas） | 艺术家肖像/档案封面，需确认图像授权 |
| `assets/artists/soto/portrait.webp` | 赫苏斯·拉斐尔·索托（Jesús Rafael Soto） | 艺术家肖像/档案封面，需确认图像授权 |
| `assets/artists/herrera/portrait.webp` | 卡门·埃雷拉（Carmen Herrera） | 艺术家肖像/档案封面，需确认图像授权 |
| `assets/artists/cruz/portrait.webp` | 卡洛斯·克鲁兹-迭斯（Carlos Cruz-Diez） | 艺术家肖像/档案封面，需确认图像授权 |

## C. 作品图像（第二、三部分共用）

以下条目源于当前 `data/artworks.json`。`w017`—`w028` 包含系列的“视觉研究 A/B”，**不是独立的、已核验作品名称**，替换真实馆藏前须确定具体作品并更新数据中的名称、年份和作者信息。

| ID | 建议替换路径 | 作品全称（现有索引） | 对应作者 | 类型 |
|---|---|---|---|---|
| w001 | `assets/artworks/w001.webp` | 《丛林》（The Jungle） | 威弗雷多·拉姆 | 具体作品索引，待核验 |
| w002 | `assets/artworks/w002.webp` | 《永恒的存在》（The Eternal Presence） | 威弗雷多·拉姆 | 具体作品索引，待核验 |
| w003 | `assets/artworks/w003.webp` | 《婚礼》（The Wedding） | 威弗雷多·拉姆 | 具体作品索引，待核验 |
| w004 | `assets/artworks/w004.webp` | 《爱的眩晕》（The Vertigo of Eros） | 罗伯托·马塔 | 具体作品索引，待核验 |
| w005 | `assets/artworks/w005.webp` | 《心理形态入侵》（Invasion of the Night） | 罗伯托·马塔 | 具体作品索引，待核验 |
| w006 | `assets/artworks/w006.webp` | 《小女巫》（Bruja infante） | 奥斯瓦尔多·维加斯 | 具体作品索引，待核验 |
| w007 | `assets/artworks/w007.webp` | 《思源》（Ancestral） | 奥斯瓦尔多·维加斯 | 具体作品索引，待核验 |
| w008 | `assets/artworks/w008.webp` | 《始源》（Génesis） | 奥斯瓦尔多·维加斯 | 具体作品索引，待核验 |
| w009 | `assets/artworks/w009.webp` | 《可穿行装置》系列（Penetrables） | 赫苏斯·拉斐尔·索托 | 系列条目，需指定作品图像 |
| w010 | `assets/artworks/w010.webp` | 《动态结构》系列（Vibrations） | 赫苏斯·拉斐尔·索托 | 系列条目，需指定作品图像 |
| w011 | `assets/artworks/w011.webp` | 《白与绿》系列（Blanco y Verde） | 卡门·埃雷拉 | 系列条目，需指定作品图像 |
| w012 | `assets/artworks/w012.webp` | 《绿色与白色》（Green and White） | 卡门·埃雷拉 | 具体作品索引，待核验 |
| w013 | `assets/artworks/w013.webp` | 《星期六》（Saturday） | 卡门·埃雷拉 | 具体作品索引，待核验 |
| w014 | `assets/artworks/w014.webp` | 《物理色彩》系列（Physichromies） | 卡洛斯·克鲁兹-迭斯 | 系列条目，需指定作品图像 |
| w015 | `assets/artworks/w015.webp` | 《色彩感应》系列（Induction Chromatique） | 卡洛斯·克鲁兹-迭斯 | 系列条目，需指定作品图像 |
| w016 | `assets/artworks/w016.webp` | 《色彩附加》系列（Couleur Additive） | 卡洛斯·克鲁兹-迭斯 | 系列条目，需指定作品图像 |
| w017 | `assets/artworks/w017.webp` | 《可穿行装置》系列 · 视觉研究 A（Penetrables / Study A） | 赫苏斯·拉斐尔·索托 | 系列研究占位，需指定真实作品 |
| w018 | `assets/artworks/w018.webp` | 《可穿行装置》系列 · 视觉研究 B（Penetrables / Study B） | 赫苏斯·拉斐尔·索托 | 系列研究占位，需指定真实作品 |
| w019 | `assets/artworks/w019.webp` | 《动态结构》系列 · 视觉研究 A（Vibrations / Study A） | 赫苏斯·拉斐尔·索托 | 系列研究占位，需指定真实作品 |
| w020 | `assets/artworks/w020.webp` | 《动态结构》系列 · 视觉研究 B（Vibrations / Study B） | 赫苏斯·拉斐尔·索托 | 系列研究占位，需指定真实作品 |
| w021 | `assets/artworks/w021.webp` | 《白与绿》系列 · 视觉研究 A（Blanco y Verde / Study A） | 卡门·埃雷拉 | 系列研究占位，需指定真实作品 |
| w022 | `assets/artworks/w022.webp` | 《白与绿》系列 · 视觉研究 B（Blanco y Verde / Study B） | 卡门·埃雷拉 | 系列研究占位，需指定真实作品 |
| w023 | `assets/artworks/w023.webp` | 《物理色彩》系列 · 视觉研究 A（Physichromies / Study A） | 卡洛斯·克鲁兹-迭斯 | 系列研究占位，需指定真实作品 |
| w024 | `assets/artworks/w024.webp` | 《物理色彩》系列 · 视觉研究 B（Physichromies / Study B） | 卡洛斯·克鲁兹-迭斯 | 系列研究占位，需指定真实作品 |
| w025 | `assets/artworks/w025.webp` | 《色彩感应》系列 · 视觉研究 A（Induction Chromatique / Study A） | 卡洛斯·克鲁兹-迭斯 | 系列研究占位，需指定真实作品 |
| w026 | `assets/artworks/w026.webp` | 《色彩感应》系列 · 视觉研究 B（Induction Chromatique / Study B） | 卡洛斯·克鲁兹-迭斯 | 系列研究占位，需指定真实作品 |
| w027 | `assets/artworks/w027.webp` | 《色彩附加》系列 · 视觉研究 A（Couleur Additive / Study A） | 卡洛斯·克鲁兹-迭斯 | 系列研究占位，需指定真实作品 |
| w028 | `assets/artworks/w028.webp` | 《色彩附加》系列 · 视觉研究 B（Couleur Additive / Study B） | 卡洛斯·克鲁兹-迭斯 | 系列研究占位，需指定真实作品 |

## D. 后期数据及上线资料

| 路径 | 待补充内容 |
|---|---|
| `data/artists.json` | 艺术家来源、完整简介、肖像来源与授权说明 |
| `data/artworks.json` | 每件作品的最终中文/外文全称、创作年代、材质、尺寸、馆藏/来源、版权说明、图片实际路径及色相/形态标签；替换系列研究占位 |
| `assets/artworks/credits.csv` | 每张作品图的摄影/版权方、授权条款、来源 URL、署名格式 |
| `assets/opening/audio.mp3` | 可选：独立 CG 配乐或音效（当前视频已有音轨时无需另加） |

## E. 图片接入注意事项

当前离线版的艺术家与作品图形由内嵌 JS 的 SVG 占位函数绘制，不会自动读取上述图片。实际补充图片时，需要在 `index.html` 内的艺术家档案渲染及作品卡片/详情弹窗渲染函数中，按对应 `artistId` 或 `w001`—`w028` 路径设置 `<img src="...">`，并保留图片加载失败时的 SVG 占位回退。若保持单 HTML 离线交付，请把替换后的资源打包在同一文件夹中，不能只复制 HTML 文件。

真实展览作品的标题、归属和授权应以艺术家基金会、收藏机构及出版资料核对后确定。
