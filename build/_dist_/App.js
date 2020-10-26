import './App.css.proxy.js';
/* src\App.svelte generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	space,
	text
} from "../web_modules/svelte/internal.js";

function create_fragment(ctx) {
	let div;
	let header;
	let img;
	let img_src_value;
	let t0;
	let p0;
	let t4;
	let a;
	let t6;
	let p1;
	let t7;
	let t8;
	let t9;
	let p2;
	let button0;
	let t11;
	let button1;
	let mounted;
	let dispose;

	return {
		c() {
			div = element("div");
			header = element("header");
			img = element("img");
			t0 = space();
			p0 = element("p");
			p0.innerHTML = `Edit <code>src/App.svelte</code> and save to reload.`;
			t4 = space();
			a = element("a");
			a.textContent = `${message}`;
			t6 = space();
			p1 = element("p");
			t7 = text("Counter = ");
			t8 = text(/*count*/ ctx[0]);
			t9 = space();
			p2 = element("p");
			button0 = element("button");
			button0.textContent = "Update Count +";
			t11 = space();
			button1 = element("button");
			button1.textContent = "Update Count 1";
			if (img.src !== (img_src_value = "/logo.svg")) attr(img, "src", img_src_value);
			attr(img, "class", "App-logo svelte-1jnae98");
			attr(img, "alt", "logo");
			attr(a, "class", "App-link svelte-1jnae98");
			attr(a, "href", "https://svelte.dev");
			attr(a, "target", "_blank");
			attr(a, "rel", "noopener noreferrer");
			attr(header, "class", "App-header svelte-1jnae98");
			attr(div, "class", "App svelte-1jnae98");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, header);
			append(header, img);
			append(header, t0);
			append(header, p0);
			append(header, t4);
			append(header, a);
			append(header, t6);
			append(header, p1);
			append(p1, t7);
			append(p1, t8);
			append(header, t9);
			append(header, p2);
			append(p2, button0);
			append(p2, t11);
			append(p2, button1);

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*click_handler*/ ctx[2]),
					listen(button1, "click", /*click_handler_1*/ ctx[3])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*count*/ 1) set_data(t8, /*count*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			run_all(dispose);
		}
	};
}

const message = "Learn Svelte";

function instance($$self, $$props, $$invalidate) {
	let count = 0;

	function countUpdate(val) {
		$$invalidate(0, count += val);
		console.log("count,val", count, val);
	}

	const click_handler = () => countUpdate(10);
	const click_handler_1 = () => countUpdate(-10);
	return [count, countUpdate, click_handler, click_handler_1];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;