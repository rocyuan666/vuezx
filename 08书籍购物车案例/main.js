const app = new Vue({
	el: '#app',
	data: {
		books: [
			{
				id: 0,
				name: '《算法导论》',
				time: '2006-9',
				price: 85,
				num: 1
			},
			{
				id: 1,
				name: '《UNIX编程艺术》',
				time: '2006-2',
				price: 59,
				num: 1
			},
			{
				id: 2,
				name: '《编程珠玑》',
				time: '2008-10',
				price: 39,
				num: 1
			},
			{
				id: 3,
				name: '《代码大全》',
				time: '2006-3',
				price: 128,
				num: 1
			},
		]
	},
	methods: {
		// 加
		add(index){
			this.books[index].num++;
		},
		// 减
		sub(index){
			if(this.books[index].num > 1){
				this.books[index].num--;
			}
		},
		// 移除
		remove(index){
			this.books.splice(index,1);
		},
		getPrice(price){
			return '￥' + price.toFixed(2)
		}
	},
	// 过滤器
	filters: {
		showPrice(price){
			return '￥' + price.toFixed(2)
		}
	},
	// 计算属性
	computed: {
		getAllPrice(){
			let allPrice = 0;
			// 1.普通for
			// for(let i = 0 ; i < this.books.length ; i++){
			// 	allPrice += this.books[i].price * this.books[i].num;
			// }
			
			// 2.for in (i为索引值)
			// for(let i in this.books){
			// 	allPrice += this.books[i].price * this.books[i].num;
			// }
			
			// 3.for of (i为具体对象)
			// for(let i of this.books){
			// 	allPrice += i.price * i.num;
			// }
			
			// return allPrice
			
			// 4.reduce函数
			return this.books.reduce(function(pre, bookObj){
				return pre + bookObj.price * bookObj.num;
			},0)
		}
	}
});


// ---------------------------------------------------------
// js高阶函数的使用  filter  map  reduce;
const nums = [2, 5, 8, 0, 123, 456, 4];
// 输出数组中小于100的数

// 1. filter函数(参数为 回调函数):
// filter 中的回调函数有一个要求: 必须返回一个boolean值
// 回调函数返回ture: 函数内部将n加到新的数组里(新数组就是 filter的返回值)
// 回调函数返回false: 函数内部过滤掉这次的n
let newnums = nums.filter(function(n){
	return n < 100
});
console.log(newnums)
// 2 5 8 0 4

// 2. map函数(参数为 回调函数):
// 会将 回调函数的返回值 加到新的数组
let new2nums = newnums.map(function(n){
	return n*2;
})
console.log(new2nums);
// 4 10 16 0 8

// 3.reduce函数(参数为 回调函数(上次返回的值,本次遍历的值),0):
let new3nums = new2nums.reduce(function(prevalue,n){
	return prevalue + n
},0)
console.log(new3nums)