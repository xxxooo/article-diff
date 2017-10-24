// js for index.pug

var indexApp = {
	el: '#app',

	data: {
		str1: '',
		str2: ''
	},

	computed: {
		diffChars () {
			return JsDiff.diffChars(this.str1, this.str2)
		},
		diffLines () {
			return JsDiff.diffLines(this.str1, this.str2)
		},
		strDiff () {
			if (this.diffChars) {
				return this.diffChars.reduce((prev, curr) => prev + this.diff2InlineTag(curr), '')
			} else {
				return null
			}
		},
		strDiffSideRemoved () {
			if (this.diffLines) {
				return this.diffLines.reduce((prev, curr) => prev + this.diff2RemovedTag(curr), '')
			} else {
				return null
			}
		},
		strDiffSideAdded () {
			if (this.diffLines) {
				return this.diffLines.reduce((prev, curr) => prev + this.diff2AddedTag(curr), '')
			} else {
				return null
			}
		}
	},

	methods: {
		diff2InlineTag (obj) {
			if (obj.added) {
				return '<ins>' + obj.value + '</ins>'
			} else if (obj.removed) {
				return '<del>' + obj.value + '</del>'
			} else {
				return obj.value
			}
		},
		diff2RemovedTag (obj) {
			if (obj.added) {
				return ''
			} else if (obj.removed) {
				return '<del>' + obj.value + '</del>'
			} else {
				return obj.value
			}
		},
		diff2AddedTag (obj) {
			if (obj.added) {
				return '<ins>' + obj.value + '</ins>'
			} else if (obj.removed) {
				return ''
			} else {
				return obj.value
			}
		}
	},

	created () {
		this.str1 = article1
		this.str2 = article2
	}
}

//
// initial diff article
//
var article1 = `美國時間10月21日，Google母公司Alphabet旗下的Project Loon項目有了新進展。

該項目的負責人Alastair Westgarth發文表示，Project Loon的氣球正搭載通信設備，在波多黎各上空為當地提供通信服務，並首次使用人工智能來控制其漂浮狀態。

Project Loon的氣球由地面一個大型的發射塔來放出升空，通過與地面通信系統進行配合，在空中發揮手機信號發射塔的作用，為當地用戶提供通訊服務。

這些氣球的主體由聚乙烯帆布製成，每個有網球場那麼大，在距離地面約20公里的同溫層中工作氣球下方掛載通訊設備，並使用太陽能作為動力，能持續在空中停留100天，最長記錄曾長達190天。

據負責人介紹，這次漂浮在波多黎各的氣球，首次使用機器學習算法來控制它們的位置。他們能夠將多個氣球組成編隊，形成小型網絡。

讓氣球長時間地滯留在預定的空域，最大的挑戰就是風。由於風在大氣中是分層的，每一層的風，都有其速度和方向。項目Loon通過對風進行分析學習，進而做出決策，讓氣球的編隊能夠保持足夠的數量，並停留在目的地上空，以完成信號覆蓋。

而退役的氣球會被回收，降落在預定地點後，由工作人員前往收集。

9月，美屬波多黎各遭受颶風重創，大量移動網絡基礎設備被破壞，通信出現大面積癱瘓。據美國聯邦通信委員會（FCC）聲明，在10月初，波多黎各約有82％的地區沒有手機信號。給當地居民提供急需的通訊服務，FCC宣布用Project Loon這樣的“創新方式幫助恢復這座島嶼上的通信”。

聯邦應急管理局（FAA），聯邦應急管理局（FEMA），美國聯邦航空管理局（FAA），美國聯邦航空管理局（FAA），聯邦應急管理局以及通信運營商AT＆T等多方面的支持。


今年3月，秘魯受水災影響，通信受到破壞，該項目與當地政府及運營商進行合作，在72小時內為4萬平方公里提供了超過160GB數據流量的臨時通信服務。數万用戶提供通信服務。

Project Loon成立於2008年，是早前Google X實驗室的其中一個項目，致力於通過高空氣球為邊遠地區提供互聯網通信服務.2013年，項目Loon在新西蘭進行首次大規模試驗。`


var article2 = `美國時間 10 月 21 日，Google 母公司 Alphabet 旗下的 Project Loon 計畫有了新進展。

該計畫的負責人 Alastair Westgarth 發文表示，Project Loon 的氣球正搭載通訊設備，在波多黎各上空為當地提供通訊服務，並首次使用人工智慧來控制其漂浮狀態。

Project Loon 的氣球由地面一個大型的發射塔來放出升空，通過與地面通訊系統進行配合，在空中發揮手機信號發射塔的作用，為當地用戶提供通訊服務。

這些氣球的主體由聚乙烯帆布製成，每個有網球場那麼大，在距離地面約 20 公里的同溫層中工作。氣球下方掛載通訊設備，並使用太陽能作為動力，能持續在空中停留 100 天，最長記錄曾長達 190 天。

據負責人介紹，這次漂浮在波多黎各的氣球，首次使用機器學習算法來控制它們的位置。他們能夠將多個氣球組成編隊，形成小型網路。

讓氣球長時間地滯留在預定的空域，最大的挑戰就是風。由於風在大氣中是分層的，每一層的風，都有其速度和方向。Project Loon 透過對風進行分析學習，進而做出決策，讓氣球的編隊能夠保持足夠的數量，並停留在目的地上空，以完成訊號覆蓋。

而退役的氣球會被回收，降落在預定地點後，由工作人員前往收集。

9 月，美屬波多黎各遭受颶風重創，大量行動網路基礎設備被破壞，通訊出現大面積癱瘓。據美國聯邦通訊委員會（FCC）聲明，在 10 月初，波多黎各約有 82% 的地區沒有手機信號。為了給當地居民提供急需的通訊服務，FCC 宣布用 Project Loon 這樣的「創新方式幫助恢復這座島嶼上的通訊」。

這次 Project Loon 能夠快速地部署並提供服務，除了此前的多次實戰，更重要的是獲得了美國聯邦通訊委員會（FCC）、美國聯邦航空管理局（FAA）、聯邦應急管理局（FEMA），以及通訊商 AT&T 等多方面的支援。

今年 3 月，秘魯受水災影響，通訊受到破壞，該計畫與當地政府及運營商進行合作，在 72 小時內為 4 萬平方公里提供了超過 160GB 數據流量的臨時通訊服務。這是 Project Loon 首次為數萬用戶提供通訊服務。`


var app = new Vue(indexApp)
