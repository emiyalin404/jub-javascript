fetch('./data.json').then(function(response) {
    // 直接轉成JSON格式
    return response.json()
}).then(function(data) {

console.log(data['data'])
var aa=(data['data'])
console.log(aa[0]["name"]);
for( var key in aa[0])
{console.log("key : " + key + " value : " + aa[0][key]);}
   let tbody = document.querySelector('tbody')
  for (let i = 0; i < aa.length; i++) {
    let tr = document.createElement('tr')
    tbody.appendChild(tr)
    for( var key in aa[i]) {
      let td = document.createElement('td')
      td.innerHTML = aa[i][key]
      tr.appendChild(td)
    }
    console.log(tr);
    let td = document.createElement('td')
    td.innerHTML = `<a href='javascript:;'>刪除</a>`
    let a = td.children[0]
    console.log(a);
    a.addEventListener('click', () => {
      let parent = a.parentNode.parentNode
      console.log(parent);
      parent.remove()
    })
    tr.appendChild(td)
  }
  var btn = document.getElementById('btn');
  var er = document.getElementById('err');

  btn.onclick = function () {
    var s = document.getElementById('list');
    console.log(s);
    var number = document.getElementById("no").value;
    var na = document.getElementById("name").value;
    var gd = document.getElementById('gender').selectedIndex;
    var gender = document.getElementById('gender').value;
    var massage = "";
    var newdata = [];
    var re = new RegExp('[0-9]');
    var arr = [];
    var dd = "";
    
    console.log(s.rows.length,'s.rows.length')
    for (i = 0; i < s.rows.length; i++) {
      dd = s.rows[i].cells[0].innerText;
      arr.push(dd);
    }
    console.log(arr);
    if (!number)
      massage += '編號不可為空\n';
    if (!na)
      massage += '姓名不可空白\n';
    if (gd == 0)
      massage += '請選擇性別\n';
    if (arr.includes(number))
      massage = "編號重複";
    if (!re.test(number))
      massage = "請輸入數字";
    if (!arr.includes(number) && na && gd != 0 && re.test(number)) {
      newdata.push(number);
      newdata.push(na);
      newdata.push(gender);
      arr.push(newdata);
      console.log(arr);

      let tr = document.createElement('tr')
      for (let i = 0; i < newdata.length; i++) {
        let td = document.createElement('td')
        td.innerHTML = newdata[i]
        tr.appendChild(td)
      }
      let td = document.createElement('td')
      td.innerHTML = `<a href='javascript:;'>刪除</a>`
      let a = td.children[0]
      a.addEventListener('click', () => {
        let parent = a.parentNode.parentNode
        console.log(parent);
        parent.remove()
      })
      tr.appendChild(td)
      console.log(tr);
      tbody.appendChild(tr)
    }
    er.textContent = massage;
    console.log(massage)
  }
    // `j`會是一個JavaScript物件
    console.log(data)
}).catch(function(err) {
  // Error :(
})


 