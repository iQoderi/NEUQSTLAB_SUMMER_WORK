/**
 * Created by qoder on 16-7-13.
 */
window.onload = function () {
    var _$ = function (id) {
        if (id) {
            return document.getElementById(id);
        } else {
            throw new Error('arguments cannot be null');
        }
    };

    var name = _$('name');
    var password = _$('password');
    var btn = _$('btn');

    var exp = {
        name: /^[\u4e00-\u9fa5]{2,20}$/,
        passowrd: /^\w{6,16}$/
    };

    var check = function (exp, value) {
        return exp.test(value);
    };


    var isLegal = function () {
        if (!check(exp.name, name.value)) {
            alert('您输入的用户名不合法!');
            return false;
        }

        if(!check(exp.passowrd,password.value)){
            alert('您输入的密码不合法!');
            return false;
        }

        return true;
    };

    var login = function () {
        if(isLegal()){
            location.href='./todo.html';
        }
    };

    btn.onclick = login;
    
};