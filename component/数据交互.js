import React from 'react'
import $ from 'jquery';
import { fn } from '_moment@2.23.0@moment';
//原生js写法
// class Test extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {'date':''};
//     }
//     componentDidMount() {
//         let xml = new XMLHttpRequest();
//         xml.open('get', 'http://localhost:3000/date.json');
//         xml.send();
//         xml.onreadystatechange = function () {
//             if (xml.readyState == 4 && xml.status == 200) {
//                 let res = xml.response;
//                 let ress=JSON.parse(res)
//                 this.setState({'date':ress.one}) //将获取到的数据添加到状态，这里的this指向的是onreadystatechange函数，所以需要bind绑定this
//              }
//         }.bind(this) //this绑定到组件Teast
//     }
//     render() {
//         return <div>
//              数据交互:{this.state.date}
//          </div>
//     }
// }
// export default Test;

//jquery写法
// class Test extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {'date':''};
//     }
//     componentDidMount() {
//                 $.ajax({
//             url: 'http://localhost:3000/date.json',
//             dateType: 'json',
//             type: 'get',
//             success: function (a) {
//                 console.log(a)
//                 // this.setState({
//                 //     'date':a.one
//                 // })
//             }
//         })
//     }
//     render() {
//         return <div>
//              数据交互:{this.state.date}
//          </div>
//     }
// }
// export default Test;

//fetch方法
// class Test extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {'date':''};
//     }
//     componentDidMount() {
//         fetch('http://localhost:3000/date.json').then(function (res) {
//             return res.json();
//         }).then(function (a) {
//             console.log(a)
//             this.setState({ 'date': a})
//             // console.log(this.state.date)
//         }.bind(this)).catch(function () {
//             console.log('失败')
//         })
//     }
//     render() {
//         return <div>
//             <h1>数据交互：</h1>
//             数据交互:
//              {this.state.date.one}
//          </div>
//     }
// } 

// export default Test;

//向服务器传数据
// fetch('http://localhost:3000/date.php?a=1&b=2',{method:'GET' })
// fetch('http://localhost:3000/date.php',{body:"{'name':'lily',method:'psot' }"})


//fetch列表
class Text extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            "date":''
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/date.json').then(function (res) {
            console.log(res)
            return res.json();
           
        }).then(function (a) {
            this.setState({
                 "date":a
            })
            // console.log(this.state.date)
        }.bind(this)).catch(function () {
             console.log("失败")
        })
    }
    render() {
        let date1 = this.state.date;
        let arr = [];
        for (var i of Object.values(date1)) {
              arr.push(<li key={i}>{i}</li>)
        }
        return <div>
            <h1>数据交互实现列表：</h1>
            <ul>{arr}</ul>
        </div>
    }
}
export default Text;