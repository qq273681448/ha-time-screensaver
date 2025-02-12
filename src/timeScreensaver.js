class ScreenSaver {
	constructor(t = 6e4) {
		this.timeout = t,
		this.timer = null,
		this.isActive = !1,
		this.container = document.createElement("div"),
		this.container.style.cssText = "\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: #000;\n            display: none;\n            justify-content: center;\n            align-items: center;\n            z-index: 9999;\n        ",
		this.clock = document.createElement("div"),
		this.clock.style.cssText = "\n            color: #fff;\n            font-size: 32vw;\n            font-family: Arial, sans-serif;\n            font-weight: bold;\n            text-shadow: 0 0 20px rgba(255,255,255,0.5);\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 100%;\n            height: 100%;\n        ",
		this.weekday = document.createElement("div"),
		this.weekday.style.cssText = "\n            position: absolute;\n            right: 30px;\n            bottom: 30px;\n            color: #fff;\n            font-size: 3vw;\n            font-family: Arial, sans-serif;\n            opacity: 0.8;\n        ",
		this.date = document.createElement("div"),
		this.date.style.cssText = "\n            position: absolute;\n            left: 30px;\n            bottom: 30px;\n            color: #fff;\n            font-size: 3vw;\n            font-family: Arial, sans-serif;\n            opacity: 0.8;\n        ",
		this.container.appendChild(this.clock),
		this.container.appendChild(this.weekday),
		this.container.appendChild(this.date),
		document.body.appendChild(this.container),
		this.bindEvents(),
		this.resetTimer(),
		this.handleUrlChange = this.handleUrlChange.bind(this),
		window.addEventListener("popstate", this.handleUrlChange),
		this.handleUrlChange()
	}
	bindEvents() {
		document.addEventListener("mousemove", (() = >{
			this.isActive && this.hide(),
			this.resetTimer()
		})),
		document.addEventListener("keydown", (() = >{
			this.isActive && this.hide(),
			this.resetTimer()
		}))
	}
	handleUrlChange() {
		if ("0" === new URLSearchParams(window.location.search).get("allPage")) {
			window.location.pathname.startsWith("/lovelace") ? this.resetTimer() : (this.hide(), this.timer && (clearTimeout(this.timer), this.timer = null))
		}
	}
	resetTimer() {
		this.timer && clearTimeout(this.timer);
		"0" === new URLSearchParams(window.location.search).get("allPage") ? window.location.pathname.startsWith("/lovelace") && (this.timer = setTimeout((() = >this.show()), this.timeout)) : this.timer = setTimeout((() = >this.show()), this.timeout)
	}
	show() {
		this.isActive = !0,
		this.container.style.display = "flex",
		this.updateClock()
	}
	hide() {
		this.isActive = !1,
		this.container.style.display = "none"
	}
	updateClock() {
		if (!this.isActive) return;
		const t = new Date,
		e = String(t.getHours()).padStart(2, "0"),
		i = String(t.getMinutes()).padStart(2, "0");
		String(t.getSeconds()).padStart(2, "0");
		this.clock.textContent = `$ {
			e
		}: $ {
			i
		}`;
		this.weekday.textContent = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][t.getDay()];
		const n = t.getFullYear(),
		s = String(t.getMonth() + 1).padStart(2, "0"),
		a = String(t.getDate()).padStart(2, "0");
		this.date.textContent = `$ {
			n
		} - $ {
			s
		} - $ {
			a
		}`,
		requestAnimationFrame((() = >this.updateClock()))
	}
	destroy() {
		window.removeEventListener("popstate", this.handleUrlChange),
		this.timer && clearTimeout(this.timer),
		this.container.remove()
	}
}
const urlParams = new URLSearchParams(window.location.search),
screenTime = urlParams.get("screenTime");
if ("-1" != screenTime) {
	new ScreenSaver(screenTime ? 1e3 * parseInt(screenTime) : 6e4)
}