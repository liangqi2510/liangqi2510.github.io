define(function() {
    function DataManager() {
        this.data = {
            CURTIME: 0
        };
        this.isReady = false;
        this.readyFn = null;
    };

    DataManager.prototype.ready = function(fn) {
        if(this.isReady) {
            fn();
        } else {
            this.readyFn = fn;
        }
    }

    DataManager.prototype.getData = function() {
        if(this.data.CURTIME > 0) {
            return this.data;
        }
    }

    var data = {
        "CURTIME": 1470301596172,
        "JSONPLAN": {
            "TOTAL": 289,
            "BOMB": {
                "TOTAL": 129,
                "ONE": 129,
                "TWO": 0
            },
            "POLICYNUM": {
                "TOTAL": 22,
                "ONE": 1,
                "TWO": 21
            },
            "RECENTDISASTERNUM": 8,
            "HISTORYINTODAY": {
                "NUM": 97,
                "CONTENT": "1792年——雪莱诞生（1822年逝世）。",
                "TYPENAME": "名人生辰"
            },
            "HOTREPORT": {
                "TOTAL": 0,
                "ONE": 0,
                "TWO": 30,
                "THREE": 50
            },
            "TODAYREPORTNUM": 8,
            "TODAYSELECT": 11,
            "TODAYTASK": 9,
            "TODAYNOTICE": 5
        },
        "JSONCOLLECT": {
            "TOTAL": 1867,
            "ORGINAL": {
                "TOTAL": 15,
                "ONE": 5,
                "TWO": 5,
                "THREE": 5
            },
            "MATERAILNUM": 5,
            "XHSNUM": 571,
            "EMAILNUM": 9,
            "WEBENTRY": {
                "TOTAL": 1267,
                "ONE": 888,
                "TWO": 247,
                "THREE": 113,
                "FOUR": 19,
                "FIVE": 910
            }
        },
        "JSONEDIT": {
            "TOTAL": 93,
            "SHAREMANU": {
                "TOTAL": 230,
                "ONE": 50,
                "TWO": 90,
                "THREE": 50,
                "FOUR": 40
            },
            "ORGINALSHARE": 230,
            "WEBNUM": 5,
            "XHSNUM": 5,
            "PRODUCTFINISHED": 5,
            "WAITAUDIT": {
                "TOTAL": 25,
                "ONE": 5,
                "TWO": 5,
                "THREE": 5,
                "FOUR": 5,
                "FIVE": 5
            },
            "AUDITED": {
                "TOTAL": 25,
                "ONE": 5,
                "TWO": 5,
                "THREE": 5,
                "FOUR": 5,
                "FIVE": 5
            }
        },
        "JSONDISTRIBUTE": {
            "ENTRYS": [{
                "MEDIAID": "MEDIAID-1",
                "MEDIANAME": "日报",
                "MEDIATYPE": "报纸",
                "CONTENT": "日报",
                "THREECLIENT": false,
                "THREECIRCLE": true,
                "TOTAL": 1
            }, {
                "MEDIAID": "MEDIAID-21",
                "MEDIANAME": "视界",
                "MEDIATYPE": "报纸",
                "CONTENT": "视界",
                "THREECLIENT": true,
                "THREECIRCLE": false,
                "TOTAL": 1
            },{
                "MEDIAID": "MEDIAID-27",
                "MEDIANAME": "MEDIAID-27",
                "MEDIATYPE": "报纸",
                "CONTENT": "MEDIAID-27",
                "THREECLIENT": false,
                "THREECIRCLE": false,
                "TOTAL": 1
            },{
                "MEDIAID": "MEDIAID-28",
                "MEDIANAME": "MEDIAID-28",
                "MEDIATYPE": "报纸",
                "CONTENT": "MEDIAID-28",
                "THREECLIENT": false,
                "THREECIRCLE": false,
                "TOTAL": 1
            },{
                "MEDIAID": "MEDIAID-31",
                "MEDIANAME": "新闻",
                "MEDIATYPE": "报纸",
                "CONTENT": "新闻",
                "THREECLIENT": false,
                "THREECIRCLE": false,
                "TOTAL": 1
            }],
            "TYPECOUNTS": [{
                "MEDIAID": "MEDIAID-1",
                "ONE": true,
                "MEDIANAME": "日报",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '1'
            }, {
                "MEDIAID": "MEDIAID-2",
                "ONE": true,
                "MEDIANAME": "新闻",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '1'
            }, {
                "MEDIAID": "MEDIAID-3",
                "ONE": true,
                "MEDIANAME": "手机报",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '1'
            }, {
                "MEDIAID": "MEDIAID-4",
                "ONE": true,
                "MEDIANAME": "视界",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '1'
            }, {
                "MEDIAID": "MEDIAID-5",
                "ONE": true,
                "MEDIANAME": "在线",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '1'
            }, {
                "MEDIAID": "MEDIAID-21",
                "ONE": true,
                "MEDIANAME": "新闻",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '2'
            }, {
                "MEDIAID": "MEDIAID-22",
                "ONE": true,
                "MEDIANAME": "大浙网",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '2'
            }, {
                "MEDIAID": "MEDIAID-23",
                "ONE": true,
                "MEDIANAME": "盒子",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '2'
            }, {
                "MEDIAID": "MEDIAID-24",
                "ONE": true,
                "MEDIANAME": "云端阅读",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '2'
            }, {
                "MEDIAID": "MEDIAID-25",
                "ONE": true,
                "MEDIANAME": "晚报",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '2'
            }, {
                "MEDIAID": "MEDIAID-26",
                "ONE": true,
                "MEDIANAME": "24小时",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '2'
            }, {
                "MEDIAID": "MEDIAID-27",
                "ONE": false,
                "MEDIANAME": "新闻1",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '2'
            }, {
                "MEDIAID": "MEDIAID-28",
                "ONE": false,
                "MEDIANAME": "新闻2",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '2'
            }, {
                "MEDIAID": "MEDIAID-29",
                "ONE": false,
                "MEDIANAME": "新闻3",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '2'
            }, {
                "MEDIAID": "MEDIAID-31",
                "ONE": true,
                "MEDIANAME": "新闻1",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '3'
            }, {
                "MEDIAID": "MEDIAID-32",
                "ONE": true,
                "MEDIANAME": "新闻2",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '3'
            }, {
                "MEDIAID": "MEDIAID-33",
                "ONE": true,
                "MEDIANAME": "新闻3",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '3'
            }, {
                "MEDIAID": "MEDIAID-34",
                "ONE": true,
                "MEDIANAME": "新闻4",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '3'
            }, {
                "MEDIAID": "MEDIAID-35",
                "ONE": true,
                "MEDIANAME": "新闻5",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '3'
            }, {
                "MEDIAID": "MEDIAID-36",
                "ONE": true,
                "MEDIANAME": "新闻6",
                "MEDIATYPE": "报纸",
                "TOTAL": 105,
                "QUANTYPE": '3'
            }]
        },
        "LINE": {
            "LINE1CHANGE": 5,
            "LINE2CHANGE": 5,
            "LINE3CHANGE": 5,
            "LINE4CHANGE": 5
        },
        "TOPRELEASE": {
            "DEPTS": [{
                "COUNT": 14,
                "DEPARTMENTID": 1,
                "DEPARTMENTNAME": "采编1部"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 2,
                "DEPARTMENTNAME": "采编2部"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 3,
                "DEPARTMENTNAME": "采编3部"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 4,
                "DEPARTMENTNAME": "采编4部"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 5,
                "DEPARTMENTNAME": "采编5部"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 6,
                "DEPARTMENTNAME": "采编6部"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 7,
                "DEPARTMENTNAME": "采编7部"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 8,
                "DEPARTMENTNAME": "采编8部"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 9,
                "DEPARTMENTNAME": "采编9部"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 10,
                "DEPARTMENTNAME": "采编10部"
            }],
            "SUBS": [{
                "COUNT": 4,
                "DEPARTMENTID": 1,
                "DEPARTMENTNAME": "第1分社"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 2,
                "DEPARTMENTNAME": "第2分社"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 3,
                "DEPARTMENTNAME": "第3分社"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 4,
                "DEPARTMENTNAME": "第4分社"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 5,
                "DEPARTMENTNAME": "第5分社"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 6,
                "DEPARTMENTNAME": "第6分社"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 7,
                "DEPARTMENTNAME": "第7分社"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 8,
                "DEPARTMENTNAME": "第8分社"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 9,
                "DEPARTMENTNAME": "第9分社"
            }, {
                "COUNT": 2,
                "DEPARTMENTID": 10,
                "DEPARTMENTNAME": "第10分社"
            }]
        },
        "OFFICALWEIBO": {
            "WEIBOMESS": [{
                "WEIBONAME": "微博1-",
                "WEIBOCONTENT": "南海自古以来就是中国固有领土,保卫国家领土完整,寸土不让。",
                "WEIBOTIME": 1470041037
            }, {
                "WEIBONAME": "微博2-",
                "WEIBOCONTENT": "南海自古以来就是中国固有领土,保卫国家领土完整,寸土不让。",
                "WEIBOTIME": 1470041037
            }, {
                "WEIBONAME": "微博3-",
                "WEIBOCONTENT": "南海自古以来就是中国固有领土,保卫国家领土完整,寸土不让。",
                "WEIBOTIME": 1470041037
            }, {
                "WEIBONAME": "微博4-",
                "WEIBOCONTENT": "南海自古以来就是中国固有领土,保卫国家领土完整,寸土不让。",
                "WEIBOTIME": 1470041037
            }, {
                "WEIBONAME": "微博5-",
                "WEIBOCONTENT": "南海自古以来就是中国固有领土,保卫国家领土完整,寸土不让。",
                "WEIBOTIME": 1470041037
            }],
            "POLICYS": [{
                "POLICYFROM": "政策1-",
                "POLICYCONTENT": "G20期间杭州市，各单位放假安排已出，传媒暂不包含"
            }, {
                "POLICYFROM": "政策2-",
                "POLICYCONTENT": "G20期间杭州市，各单位放假安排已出，传媒暂不包含"
            }]
        },
        "THREEDISTRIBUTE": {
            "CONTENT": {
                "TOTAL": 0,
                "ONE": 5,
                "TWO": 5,
                "THREE": 4,
                "FOUR": 4,
                "FIVE": 4
            }
        },
        CENTER: {
            CENTERDATAS: [{
                SOURCETYPE: '',
                TITLE: '',
                CONTENT: ''
            }, {
                SOURCETYPE: '',
                TITLE: '',
                CONTENT: ''
            }, {
                SOURCETYPE: '',
                TITLE: '',
                CONTENT: ''
            }]
        }
    }

    DataManager.prototype.ajax = function(cb) {
        var self = this;
        var url = 'http://127.0.0.1:3002/screen/centeralldata/alldata?user_id=admin&department=aa';
        var url = 'http://127.0.0.1:7200/test';
        setTimeout(function() {
            data.CURTIME++;

            data.JSONPLAN.TOTAL = 0;
        
            data.JSONPLAN.BOMB.TOTAL = 0;
            data.JSONPLAN.BOMB.TOTAL += data.JSONPLAN.BOMB.ONE += ~~(Math.random() * 1 + 0.5);
            data.JSONPLAN.BOMB.TOTAL += data.JSONPLAN.BOMB.TWO += ~~(Math.random() * 1 + 0.5);
            data.JSONPLAN.TOTAL += data.JSONPLAN.BOMB.TOTAL;
        
            data.JSONPLAN.POLICYNUM.TOTAL = 0;
            data.JSONPLAN.POLICYNUM.TOTAL += data.JSONPLAN.POLICYNUM.ONE += ~~(Math.random() * 1 + 0.5);
            data.JSONPLAN.POLICYNUM.TOTAL += data.JSONPLAN.POLICYNUM.TWO += ~~(Math.random() * 1 + 0.5);
            data.JSONPLAN.TOTAL += data.JSONPLAN.POLICYNUM.TOTAL;
        
            data.JSONPLAN.TOTAL += data.JSONPLAN.RECENTDISASTERNUM += ~~(Math.random() * 1 + 0.5);
            data.JSONPLAN.TOTAL += data.JSONPLAN.HISTORYINTODAY.NUM += ~~(Math.random() * 1 + 0.5);
        
            data.JSONPLAN.HOTREPORT.TOTAL = 0;
            data.JSONPLAN.HOTREPORT.TOTAL += data.JSONPLAN.HOTREPORT.ONE += ~~(Math.random() * 1 + 0.5);
            data.JSONPLAN.HOTREPORT.TOTAL += data.JSONPLAN.HOTREPORT.TWO += ~~(Math.random() * 1 + 0.5);
            data.JSONPLAN.HOTREPORT.TOTAL += data.JSONPLAN.HOTREPORT.THREE += ~~(Math.random() * 1 + 0.5);
            data.JSONPLAN.TOTAL += data.JSONPLAN.HOTREPORT.TOTAL;
        
            data.JSONPLAN.TOTAL += data.JSONPLAN.TODAYREPORTNUM += ~~(Math.random() * 1 + 0.5);
            data.JSONPLAN.TOTAL += data.JSONPLAN.TODAYSELECT += ~~(Math.random() * 1 + 0.5);
            data.JSONPLAN.TOTAL += data.JSONPLAN.TODAYTASK += ~~(Math.random() * 1 + 0.5);
            data.JSONPLAN.TOTAL += data.JSONPLAN.TODAYNOTICE += ~~(Math.random() * 1 + 0.5);
        
            data.JSONCOLLECT.WEBENTRY.TOTAL = 0;
            data.JSONCOLLECT.WEBENTRY.TOTAL += data.JSONCOLLECT.WEBENTRY.ONE += ~~(Math.random() * 1 + 0.5);
            data.JSONCOLLECT.WEBENTRY.TOTAL += data.JSONCOLLECT.WEBENTRY.TWO += ~~(Math.random() * 1 + 0.5);
            data.JSONCOLLECT.WEBENTRY.TOTAL += data.JSONCOLLECT.WEBENTRY.THREE += ~~(Math.random() * 1 + 0.5);
            data.JSONCOLLECT.WEBENTRY.TOTAL += data.JSONCOLLECT.WEBENTRY.FOUR += ~~(Math.random() * 1 + 0.5);
            data.JSONCOLLECT.WEBENTRY.TOTAL += data.JSONCOLLECT.WEBENTRY.FIVE += ~~(Math.random() * 1 + 0.5);
        
            data.JSONCOLLECT.ORGINAL.TOTAL = 0;
            data.JSONCOLLECT.ORGINAL.TOTAL += data.JSONCOLLECT.ORGINAL.ONE += ~~(Math.random() * 1 + 0.5);
            data.JSONCOLLECT.ORGINAL.TOTAL += data.JSONCOLLECT.ORGINAL.TWO += ~~(Math.random() * 1 + 0.5);
            data.JSONCOLLECT.ORGINAL.TOTAL += data.JSONCOLLECT.ORGINAL.THREE += ~~(Math.random() * 1 + 0.5);
        
            data.JSONCOLLECT.MATERAILNUM += ~~(Math.random() * 1 + 0.5);
            data.JSONCOLLECT.XHSNUM += ~~(Math.random() * 1 + 0.5);
            data.JSONCOLLECT.EMAILNUM += ~~(Math.random() * 1 + 0.5);
            data.JSONCOLLECT.TOTAL = data.JSONCOLLECT.MATERAILNUM + data.JSONCOLLECT.XHSNUM + data.JSONCOLLECT.EMAILNUM + data.JSONCOLLECT.WEBENTRY.TOTAL + data.JSONCOLLECT.ORGINAL.TOTAL
        
            data.JSONEDIT.TOTAL = 0;
            data.JSONEDIT.TOTAL += data.JSONEDIT.ORGINALSHARE += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.TOTAL += data.JSONEDIT.WEBNUM += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.TOTAL += data.JSONEDIT.XHSNUM += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.TOTAL += data.JSONEDIT.PRODUCTFINISHED += ~~(Math.random() * 1 + 0.5);
        
            data.JSONEDIT.SHAREMANU.TOTAL = 0;
            data.JSONEDIT.SHAREMANU.TOTAL += data.JSONEDIT.SHAREMANU.ONE += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.SHAREMANU.TOTAL += data.JSONEDIT.SHAREMANU.TWO += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.SHAREMANU.TOTAL += data.JSONEDIT.SHAREMANU.THREE += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.SHAREMANU.TOTAL += data.JSONEDIT.SHAREMANU.FOUR += ~~(Math.random() * 1 + 0.5);
        
            data.JSONEDIT.WAITAUDIT.TOTAL = 0;
            data.JSONEDIT.WAITAUDIT.TOTAL += data.JSONEDIT.WAITAUDIT.ONE += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.WAITAUDIT.TOTAL += data.JSONEDIT.WAITAUDIT.TWO += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.WAITAUDIT.TOTAL += data.JSONEDIT.WAITAUDIT.THREE += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.WAITAUDIT.TOTAL += data.JSONEDIT.WAITAUDIT.FOUR += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.WAITAUDIT.TOTAL += data.JSONEDIT.WAITAUDIT.FIVE += ~~(Math.random() * 1 + 0.5);
        
            data.JSONEDIT.AUDITED.TOTAL = 0;
            data.JSONEDIT.AUDITED.TOTAL += data.JSONEDIT.AUDITED.ONE += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.AUDITED.TOTAL += data.JSONEDIT.AUDITED.TWO += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.AUDITED.TOTAL += data.JSONEDIT.AUDITED.THREE += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.AUDITED.TOTAL += data.JSONEDIT.AUDITED.FOUR += ~~(Math.random() * 1 + 0.5);
            data.JSONEDIT.AUDITED.TOTAL += data.JSONEDIT.AUDITED.FIVE += ~~(Math.random() * 1 + 0.5);
        
            data.TOPRELEASE.DEPTS.forEach(function(d, i) {
                d.COUNT += ~~(Math.random() * i / 5 + 1);
            });
            data.TOPRELEASE.SUBS.forEach(function(d, i) {
                d.COUNT += ~~(Math.random() * i / 5 + 1);
            });
        
            data.THREEDISTRIBUTE.CONTENT.ONE += ~~(Math.random() * 1 + 0.5);
            data.THREEDISTRIBUTE.CONTENT.TWO += ~~(Math.random() * 1 + 0.5);
            data.THREEDISTRIBUTE.CONTENT.THREE += ~~(Math.random() * 1 + 0.5);
            data.THREEDISTRIBUTE.CONTENT.FOUR += ~~(Math.random() * 1 + 0.5);
            data.THREEDISTRIBUTE.CONTENT.FIVE += ~~(Math.random() * 1 + 0.5);
        
            data.LINE.LINE1CHANGE++;
            data.LINE.LINE2CHANGE++;
            data.LINE.LINE3CHANGE++;
        
            data.OFFICALWEIBO.WEIBOMESS.forEach(function(d, i) {
                var t = new Date().getTime();
                d.WEIBONAME = '微博' + i + ':' + t;
                d.WEIBOCONTENT = t + '南海自古以来就是中国固有领土,保卫国家领土完整,寸土不让。';
                d.WEIBOTIME = t;
            });
        
            data.OFFICALWEIBO.POLICYS.forEach(function(d, i) {
                var t = new Date().getTime();
                d.POLICYFROM = "" + t;
                d.POLICYCONTENT = "G20期间杭州市，各单位放假安排已出，传媒暂不包含" + t;
            });
        
            var content = [
                '习近平告诫干部该敬畏什么',
                '两学一做 ',
                '不忘什么样的初心',
                '《深港通实施方案》',
                '以创新求发展  ',
                '张高丽会见库克',
                '离婚或让王宝强大出血',
                '该学刘强东1年赚1块',
                '选李天一代理律师',
                '婚姻变成敛财利器 ',
                '王春宁亮相 原任12军军长',
                '量子科学实验卫星',
                '加强房地产中介管理',
                '前国际足联主席阿维兰热去世',
                '北京市一分检依法受理'
            ];
        
            data.JSONDISTRIBUTE.ENTRYS.forEach(function(d, i) {
                var t = new Date().getMinutes();
                d.CONTENT = t + '' + content[(t + i) % content.length];
                d.TOTAL++;
            });
        
            data.CENTER.CENTERDATAS.forEach(function(d, i) {
                var t = new Date().getMinutes();
                d.SOURCETYPE = '类型' + i;
                d.TITLE = '军事新闻:编号' + t;
                d.CONTENT = '装甲部队，有着令人害怕的攻击力，而且可以在一回合内攻击数次。装甲部队在战况不利时也能迅速撤退，脱离战场（除非和他们交战的也是支移动力极高的快速部队）。它包括装甲车和装甲兵。';
            });
            var s = new Date().getSeconds();
            data.JSONDISTRIBUTE.TYPECOUNTS.forEach(function(d, i) {
                d.TOTAL += 5;
            });
            data.JSONPLAN.HISTORYINTODAY.TYPENAME = '名人生辰';
            data.JSONPLAN.HISTORYINTODAY.CONTENT = '1792年——雪莱诞生（1822年逝世）';
            if(data.CURTIME > self.data.CURTIME) {
                self.data = data;
            }

            if(!self.isReady) {
                self.isReady = true;
                self.readyFn && self.readyFn();
            }

            cb && cb();
        }, 100)
    }
    DataManager.prototype.start = function() {
        var self = this;
        self.ajax();
        window.setInterval(function() {
            self.ajax();
        }, 5 * 1000)

        
    }
    var dataManager = new DataManager();
    dataManager.start();
    return dataManager;
})