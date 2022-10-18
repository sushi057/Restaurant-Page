(()=>{"use strict";function e(e){const t=document.createElement("li");return t.textContent=e,t.classList.add("menu-items"),t}console.log("homepage"),console.log("menu page");const t=document.createElement("header"),n=document.querySelector("#content"),a=document.createElement("div"),o=document.createElement("img");o.src="../src/images/logo.jpg",o.alt="npp logo",o.classList.add("logo-img"),a.appendChild(o);const d=document.createElement("h2");d.textContent="NPP BURGER HOUSE",d.classList.add("logo-text"),a.appendChild(d),t.appendChild(a);const r=document.createElement("ul");function s(e){const t=document.createElement("li");return t.textContent=e,t.classList.add("list-item"),t}r.classList.add("nav-list"),r.appendChild(s("Home")),r.appendChild(s("Menu")),r.appendChild(s("Gallery")),r.appendChild(s("Contact")),t.appendChild(r),console.log("wtf is ogin gon"),n.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1");t.textContent="Welcoem to NPP Burger House",t.classList.add("heading"),e.appendChild(t);const n=document.createElement("p");n.textContent="100% Fresh",t.appendChild(n);const a=document.createElement("p");a.textContent='Visit the NPP Burger House in the heart of Mangal bazar near Krishna Mandir and experience "da best burger in the da Town". Our custom made burger is prepared with fresh ingredients daily. Not in the mood for a burger? Choose what you want to have from our menu. Why not give us a try when youre looking to either grab a quick bite, or hang around for "Burgers and Beers" with the guys... or ladies... of course!!!',a.classList.add("detail"),e.appendChild(a);const o=document.createElement("iframe");return o.src='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.6766269777637!2d85.32568609613541!3d27.673626978363703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c5a8aa00a9%3A0x48df69ebc853dbba!2sNPP%20Burger%20House!5e0!3m2!1sen!2snp!4v1666017631413!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',o.alt="NPP map",o.classList.add("map"),e.appendChild(o),e}()),document.body.insertBefore(t,n),n.appendChild(function(){const t=document.createElement("div"),n=document.createElement("h1");n.textContent="These are the variety of items we provide:",n.classList.add("menu-title"),t.appendChild(n);const a=document.createElement("div"),o=document.createElement("img");o.src="../src/images/momo.jpg",o.alt="momo iamge",o.classList.add("menu-img"),a.appendChild(o);const d=["Chicken Momo","Buff Momo","Veg Momo","C. Momo"],r=document.createElement("ul");for(const t of d)r.appendChild(e(t));a.appendChild(r);const s=document.createElement("div"),c=document.createElement("img");c.src="../src/images/burger.jpg",c.alt="burger iamge",c.classList.add("menu-img"),s.appendChild(c);const i=["Chicken Burger","Grilled Burger","Veg Burger","Cheese Burger"],l=document.createElement("ul");for(const t of i)l.appendChild(e(t));s.appendChild(l);const m=document.createElement("div"),u=document.createElement("img");u.src="../src/images/sausage.jpg",u.alt="sausage iamge",u.classList.add("menu-img"),m.appendChild(u);const p=["Chicken Sausage","Aaloo Stick","Buff Sausage","Veg Sausage"],g=document.createElement("ul");for(const t of p)g.appendChild(e(t));return m.appendChild(g),t.appendChild(s),t.appendChild(a),t.appendChild(m),t}()),document.body.appendChild(n)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBV3BCLFlBQVlxQixHQUV2QixNQUFNQyxFQUFjLENBQUMsaUJBQWtCLGlCQUFrQixhQUFjLGlCQUNqRUMsRUFBYXJDLFNBQVNDLGNBQWMsTUFFMUMsSUFBSyxNQUFNZ0MsS0FBUUcsRUFDZkMsRUFBV3ZCLFlBQVlqQixFQUFlb0MsSUFHMUNDLEVBQVdwQixZQUFZdUIsR0FHdkIsTUFBTUMsRUFBWXRDLFNBQVNDLGNBQWMsT0FFbkNzQyxFQUFhdkMsU0FBU0MsY0FBYyxPQUMxQ3NDLEVBQVczQixJQUFNLDRCQUNqQjJCLEVBQVcxQixJQUFNLGdCQUNqQjBCLEVBQVdwQyxVQUFVQyxJQUFJLFlBQ3pCa0MsRUFBVXhCLFlBQVl5QixHQUV0QixNQUFNQyxFQUFhLENBQUMsa0JBQW1CLGNBQWUsZUFBZ0IsZUFDaEVDLEVBQVl6QyxTQUFTQyxjQUFjLE1BRXpDLElBQUssTUFBTWdDLEtBQVFPLEVBQ2ZDLEVBQVUzQixZQUFZakIsRUFBZW9DLElBV3pDLE9BUkFLLEVBQVV4QixZQUFZMkIsR0FJdEJkLEVBQVNiLFlBQVlvQixHQUNyQlAsRUFBU2IsWUFBWWUsR0FDckJGLEVBQVNiLFlBQVl3QixHQUVkWCxDQUVYLENFMUJvQmUsSUFFcEIxQyxTQUFTeUIsS0FBS1gsWUFBWU4sRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnbWVudSBwYWdlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpIHtcbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnVGhlc2UgYXJlIHRoZSB2YXJpZXR5IG9mIGl0ZW1zIHdlIHByb3ZpZGU6JztcbiAgICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS10aXRsZScpO1xuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG5cbiAgICAvL01lbnUgR3JpZFxuICAgIGNvbnN0IG1vbW9NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBtb21vSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtb21vSW1hZ2Uuc3JjID0gJy4uL3NyYy9pbWFnZXMvbW9tby5qcGcnO1xuICAgIG1vbW9JbWFnZS5hbHQgPSAnbW9tbyBpYW1nZSc7XG4gICAgbW9tb0ltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJyk7XG4gICAgbW9tb01lbnUuYXBwZW5kQ2hpbGQobW9tb0ltYWdlKTtcblxuICAgIC8vbW9tbyBsaXN0XG4gICAgY29uc3QgbW9tb0l0ZW1zID0gWydDaGlja2VuIE1vbW8nLCAnQnVmZiBNb21vJywgJ1ZlZyBNb21vJywgJ0MuIE1vbW8nXTtcbiAgICBjb25zdCBtb21vTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbW9tb0l0ZW1zKXtcbiAgICAgICAgbW9tb0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdEl0ZW0oaXRlbSkpO1xuICAgIH1cblxuICAgIG1vbW9NZW51LmFwcGVuZENoaWxkKG1vbW9MaXN0KTtcblxuICAgIC8vQnVyZ2VyIExpc3RcbiAgICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBidXJnZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJ1cmdlckltYWdlLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2J1cmdlci5qcGcnO1xuICAgIGJ1cmdlckltYWdlLmFsdCA9ICdidXJnZXIgaWFtZ2UnO1xuICAgIGJ1cmdlckltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJyk7XG4gICAgYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChidXJnZXJJbWFnZSk7XG5cbiAgICBjb25zdCBidXJnZXJJdGVtcyA9IFsnQ2hpY2tlbiBCdXJnZXInLCAnR3JpbGxlZCBCdXJnZXInLCAnVmVnIEJ1cmdlcicsICdDaGVlc2UgQnVyZ2VyJ107XG4gICAgY29uc3QgYnVyZ2VyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYnVyZ2VySXRlbXMpe1xuICAgICAgICBidXJnZXJMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RJdGVtKGl0ZW0pKTtcbiAgICB9XG5cbiAgICBidXJnZXJNZW51LmFwcGVuZENoaWxkKGJ1cmdlckxpc3QpO1xuXG4gICAgLy9TdGljayBGb29kIExpc3RcbiAgICBjb25zdCBzdGlja01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHN0aWNrSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzdGlja0ltYWdlLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3NhdXNhZ2UuanBnJztcbiAgICBzdGlja0ltYWdlLmFsdCA9ICdzYXVzYWdlIGlhbWdlJztcbiAgICBzdGlja0ltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJyk7XG4gICAgc3RpY2tNZW51LmFwcGVuZENoaWxkKHN0aWNrSW1hZ2UpO1xuXG4gICAgY29uc3Qgc3RpY2tJdGVtcyA9IFsnQ2hpY2tlbiBTYXVzYWdlJywgJ0FhbG9vIFN0aWNrJywgJ0J1ZmYgU2F1c2FnZScsICdWZWcgU2F1c2FnZSddO1xuICAgIGNvbnN0IHN0aWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc3RpY2tJdGVtcyl7XG4gICAgICAgIHN0aWNrTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaXN0SXRlbShpdGVtKSk7XG4gICAgfVxuXG4gICAgc3RpY2tNZW51LmFwcGVuZENoaWxkKHN0aWNrTGlzdCk7XG5cblxuICAgIC8vQXBwZW5kIE1lbnUgSXRlbXNcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChidXJnZXJNZW51KTtcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChtb21vTWVudSk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoc3RpY2tNZW51KTtcblxuICAgIHJldHVybiBtZW51UGFnZTtcbiBcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0obmFtZSl7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1zJyk7XG4gICAgXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpe1xuICAgIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiV2VsY29lbSB0byBOUFAgQnVyZ2VyIEhvdXNlXCI7XG4gICAgcGFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuXG4gICAgY29uc3Qgc3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdWJUZXh0LnRleHRDb250ZW50ID0gXCIxMDAlIEZyZXNoXCI7XG4gICAgcGFnZVRpdGxlLmFwcGVuZENoaWxkKHN1YlRleHQpO1xuXG4gICAgY29uc3QgcGFnZURldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYWdlRGV0YWlsLnRleHRDb250ZW50ID0gJ1Zpc2l0IHRoZSBOUFAgQnVyZ2VyIEhvdXNlIGluIHRoZSBoZWFydCBvZiBNYW5nYWwgYmF6YXIgbmVhciBLcmlzaG5hIE1hbmRpciBhbmQgZXhwZXJpZW5jZSBcImRhIGJlc3QgYnVyZ2VyIGluIHRoZSBkYSBUb3duXCIuIE91ciBjdXN0b20gbWFkZSBidXJnZXIgaXMgcHJlcGFyZWQgd2l0aCBmcmVzaCBpbmdyZWRpZW50cyBkYWlseS4gTm90IGluIHRoZSBtb29kIGZvciBhIGJ1cmdlcj8gQ2hvb3NlIHdoYXQgeW91IHdhbnQgdG8gaGF2ZSBmcm9tIG91ciBtZW51LiBXaHkgbm90IGdpdmUgdXMgYSB0cnkgd2hlbiB5b3VyZSBsb29raW5nIHRvIGVpdGhlciBncmFiIGEgcXVpY2sgYml0ZSwgb3IgaGFuZyBhcm91bmQgZm9yIFwiQnVyZ2VycyBhbmQgQmVlcnNcIiB3aXRoIHRoZSBndXlzLi4uIG9yIGxhZGllcy4uLiBvZiBjb3Vyc2UhISEnO1xuICAgIHBhZ2VEZXRhaWwuY2xhc3NMaXN0LmFkZCgnZGV0YWlsJyk7XG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQocGFnZURldGFpbCk7XG5cbiAgICBjb25zdCBtYXBMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIG1hcExvY2F0aW9uLnNyYyA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDQ0MS42NzY2MjY5Nzc3NjM3ITJkODUuMzI1Njg2MDk2MTM1NDEhM2QyNy42NzM2MjY5NzgzNjM3MDMhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDM5ZWIxOWM1YThhYTAwYTklM0EweDQ4ZGY2OWViYzg1M2RiYmEhMnNOUFAlMjBCdXJnZXIlMjBIb3VzZSE1ZTAhM20yITFzZW4hMnNucCE0djE2NjYwMTc2MzE0MTMhNW0yITFzZW4hMnNucFwiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT4nO1xuICAgIG1hcExvY2F0aW9uLmFsdCA9ICdOUFAgbWFwJztcbiAgICBtYXBMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdtYXAnKTtcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChtYXBMb2NhdGlvbik7XG5cbiAgICByZXR1cm4gaG9tZVBhZ2U7XG5cbn1cblxuY29uc29sZS5sb2coJ2hvbWVwYWdlJyk7IiwiaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gXCIuL21lbnVcIjtcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuLy9MZWZ0IFNlY3Rpb24gd2l0aCBsb2dvXG5jb25zdCBsb2dvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBsb2dvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmxvZ29JbWFnZS5zcmMgPSAnLi4vc3JjL2ltYWdlcy9sb2dvLmpwZyc7XG5sb2dvSW1hZ2UuYWx0ID0gJ25wcCBsb2dvJztcbmxvZ29JbWFnZS5jbGFzc0xpc3QuYWRkKCdsb2dvLWltZycpO1xubG9nb1NlY3Rpb24uYXBwZW5kQ2hpbGQobG9nb0ltYWdlKTtcblxuY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xubG9nb1RleHQudGV4dENvbnRlbnQgPSAnTlBQIEJVUkdFUiBIT1VTRSc7XG5sb2dvVGV4dC5jbGFzc0xpc3QuYWRkKCdsb2dvLXRleHQnKTtcbmxvZ29TZWN0aW9uLmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcblxuaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29TZWN0aW9uKTtcblxuLy9OYXYgYmFyXG5jb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbm5hdkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWxpc3QnKTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdChsaXN0TmFtZSkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGxpc3ROYW1lO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpO1xuXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5uYXZMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoJ0hvbWUnKSk7XG5uYXZMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoJ01lbnUnKSk7XG5uYXZMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoJ0dhbGxlcnknKSk7XG5uYXZMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoJ0NvbnRhY3QnKSk7XG5cbmhlYWRlci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcbmNvbnNvbGUubG9nKCd3dGYgaXMgb2dpbiBnb24nKTtcblxuLy9Ib21lIFBhZ2VcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZEhvbWVQYWdlKCkpO1xuZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoaGVhZGVyLCBjb250ZW50KTtcblxuLy9NZW51IFBhZ2VcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZE1lbnVQYWdlKCkpO1xuLy8gZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoaGVhZGVyLCBjb250ZW50KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7Il0sIm5hbWVzIjpbImNyZWF0ZUxpc3RJdGVtIiwibmFtZSIsImxpc3RJdGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyIiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dvU2VjdGlvbiIsImxvZ29JbWFnZSIsInNyYyIsImFsdCIsImFwcGVuZENoaWxkIiwibG9nb1RleHQiLCJuYXZMaXN0IiwiY3JlYXRlTGlzdCIsImxpc3ROYW1lIiwiaG9tZVBhZ2UiLCJwYWdlVGl0bGUiLCJzdWJUZXh0IiwicGFnZURldGFpbCIsIm1hcExvY2F0aW9uIiwibG9hZEhvbWVQYWdlIiwiYm9keSIsImluc2VydEJlZm9yZSIsIm1lbnVQYWdlIiwibWVudVRpdGxlIiwibW9tb01lbnUiLCJtb21vSW1hZ2UiLCJtb21vSXRlbXMiLCJtb21vTGlzdCIsIml0ZW0iLCJidXJnZXJNZW51IiwiYnVyZ2VySW1hZ2UiLCJidXJnZXJJdGVtcyIsImJ1cmdlckxpc3QiLCJzdGlja01lbnUiLCJzdGlja0ltYWdlIiwic3RpY2tJdGVtcyIsInN0aWNrTGlzdCIsImxvYWRNZW51UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=