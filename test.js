var func = require('./func');

it('Проверка функции которая проверяет присутствует ли в объекте незаполненное значение', ()=>{
    let result = func.isUndefToObj({key:'1'});
    if(result !== false) {
        throw new Error('Ошибка в объекте с одним заполненым свойством');
    }
    result = func.isUndefToObj({key:'1', key2:'2', key3:'3'});
    if(result !== false) {
        throw new Error('Ошибка в объекте несколькими заполненым свойством');
    }
    result = func.isUndefToObj({key:undefined});
    if(result !== true) {
        throw new Error('Ошибка в объекте одним undefined свойством');
    }
    result = func.isUndefToObj({key:'1', key2:undefined, key3:'3'});
    if(result !== true) {
        throw new Error('Ошибка в объекте несколькими undefined свойством');
    }
    result = func.isUndefToObj({key:null});
    if(result !== true) {
        throw new Error('Ошибка в объекте одним null свойством');
    }
    result = func.isUndefToObj({key:'1', key2:undefined, key3:'3'});
    if(result !== true) {
        throw new Error('Ошибка в объекте несколькими null свойством');
    }
    result = func.isUndefToObj({key:""});
    if(result !== true) {
        throw new Error('Ошибка в объекте одной пустой строкой в свойстве');
    }
    result = func.isUndefToObj({key:'1', key2:undefined, key3:'3'});
    if(result !== true) {
        throw new Error('Ошибка в объекте несколькими пустыми строками в свойствах');
    }
});