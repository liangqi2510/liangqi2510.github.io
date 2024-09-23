define(function(require) {
    var BorderType1 = require('components/BorderType1');
    var dataManager = require('tool/dataManager');
    var util = require('tool/util');
    
    function OfficalWeiBo(parent, w, h) {
        var self = this;
        BorderType1.call(this, parent, w, h);

        self.newsIndex = 0;
        self.newsList = util.clone(dataManager.getData().OFFICALWEIBO.WEIBOMESS);

        self.policyIndex = 0;
        self.policyList = util.clone(dataManager.getData().OFFICALWEIBO.POLICYS);

        //微博
        self.newsG = self.snapElement.g().attr({
            opacity: 0
        });
        self.newsPath1 = self.newsG.path('M-115 -115  112 -115 125 -102 125 25 -115 25 Z');
        self.newsPath2 = self.newsG.path('M-115 -95  125 -95');

        self.newsTitle = self.newsG.text(0, 2, '').attr({
            fill: '#9BD4D7',
            fontFamily: 'SimHei',
            letterSpacing: '2.5px',
            fontSize: '14px',
            transform: 'matrix(1, 0, 0, 1, -105, -102)'
        });

        self.newsTime1 = self.newsG.text(-100, 7, '').attr({
            fill: '#9BD4D7',
            fontFamily: 'SimHei',
            fontSize: '12px'
        });
        self.newsTime2 = self.newsG.text(110, 7, '').attr({
            fill: '#9BD4D7',
            fontFamily: 'SimHei',
            fontSize: '12px',
            textAnchor: 'end'
        });

        var foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        var $foreignObject = $(foreignObject);

        self.newsG.append(foreignObject);
        var foreignObject = self.newsG.select('foreignObject');
        var $div = $('<div></div>');
        $div.css({
            margin: '0px',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            'font-size': '16px',
            'line-height': '24px',
            color: '#FFFFFF',
            textIndent: '2em',
            border: 'solid 1px #0d7e9e',
            padding: '5px'
        });

        $foreignObject.append($div);
        var $p = $('<p></p>');
        $p.css({
            margin: 0,
            overflow: 'hidden',
            height: '75px',
            fontFamily: 'SimHei'
        });
        $p.text('');
        $div.append($p);
        self.$newsContent = $p;
        self.newsForeignObject = foreignObject;

        foreignObject.attr({
            width: '231px',
            height: '110px',
            x: -110,
            y: -89
        });

        //政策
        self.policyG = self.snapElement.g().attr({
            opacity: 0
        });
        self.policyPath = self.policyG.path('M-60 55 -60 30 118 30 118 55 -60 55 -60 135 75 135 118 100 118 30');
        self.policyTitle = self.policyG.text(0, 2, '').attr({
            fill: '#9BD4D7',
            fontFamily: 'SimHei',
            letterSpacing: '2.5px',
            fontSize: '14px',
            transform: 'matrix(1,0,0,1,-50,45)'
        });

        var foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        var $foreignObject = $(foreignObject);
        self.policyG.append(foreignObject);
        var foreignObject = self.policyG.select('foreignObject');
        $p = $('<p></p>');
        $p.css({
            margin: '0px',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            'font-size': '12px',
            'line-height': '20px',
            color: '#FFFFFF',
            textIndent: '2em',
            letterSpacing: '1px',
            fontFamily: 'SimHei'

        });
        $p.text('');
        $foreignObject.append($p)
        self.$policyContent = $p;

        $foreignObject.attr({
            width: '170px',
            height: '73px',
            x: -55,
            y: 60
        });

        Snap.set(self.newsPath1, self.newsPath2, self.policyPath).attr({
            stroke: '#0d7e9e',
            fill: 'none',
            strokeWidth: 1,
            transform: 'translate(0.5,0.5)'
        })

        self.policyPath.attr({
            stroke: '#FFFFFF'
        });
    }

    OfficalWeiBo.prototype = Object.create(BorderType1.prototype);
    OfficalWeiBo.constructor = OfficalWeiBo;
    OfficalWeiBo.prototype.init = function() {
        var self = this;
        BorderType1.prototype.init.call(this, function() {
            self.setTitle('集团媒体官方微博');
            self.startTimeTask();
        });
    };
    OfficalWeiBo.prototype.showNews = function(news) {
        var self = this;

        var q = new Queue();
        q.runActions([
            function() {
                self.newsG.animate({
                    opacity: 0
                }, 500);
                delay(1500, q.run)
            },
            function() {
                self.newsG.attr({
                    opacity: 1
                });
                self.newsPath1.animatePath('M-115 -115  112 -115 125 -102 125 25 -115 25 -115 -115', 500);
                self.newsPath2.animatePath('M-115 -95  125 -95', 500, q.run);

                self.newsTitle.attr({
                    opacity: 0
                });
                self.$newsContent.css({
                    opacity: 0
                });
                self.newsTime1.attr({
                    opacity: 0
                });
                self.newsTime2.attr({
                    opacity: 0
                })
            },
            function() {
                self.newsTitle.attr({
                    text: news.WEIBONAME
                });
                self.$newsContent.text(news.WEIBOCONTENT);

                var date = new Date(news.WEIBOTIME);

                var format1 = d3.time.format('%H:%M:%S');
                var format2 = d3.time.format('%Y-%m-%d');

                self.newsTime1.attr({
                    text: format1(date)
                });
                self.newsTime2.attr({
                    text: format2(date)
                });

                self.newsTitle.animate({
                    opacity: 1
                }, 500);
                self.$newsContent.animate({
                    opacity: 1
                }, 1, 'linear');
                self.newsTime1.animate({
                    opacity: 1
                }, 500);
                self.newsTime2.animate({
                    opacity: 1
                }, 500)
            }
        ]);
    };

    OfficalWeiBo.prototype.showPolicy = function(policy) {
        var self = this;

        var q = new Queue();
        q.runActions([
            function() {
                self.policyG.animate({
                    opacity: 0
                }, 500);
                delay(1500, q.run)
            },
            function() {
                self.policyG.attr({
                    opacity: 1
                });
                self.policyPath.animatePath('M-60 55 -60 30 118 30 118 55 -60 55 -60 135 75 135 118 100 118 30', 500, q.run);

                self.policyTitle.attr({
                    opacity: 0
                });
                self.$policyContent.css({
                    opacity: 0
                });
            },
            function() {
                self.policyTitle.attr({
                    text: policy.POLICYFROM
                });
                self.$policyContent.text(policy.POLICYCONTENT);

                self.policyTitle.animate({
                    opacity: 1
                }, 500);
                self.$policyContent.animate({
                    opacity: 1
                }, 1, 'linear');
            }
        ]);
    }

    OfficalWeiBo.prototype.update = function() {
        var self = this;

        self.newsList = util.clone(dataManager.getData().OFFICALWEIBO.WEIBOMESS);
    }
    OfficalWeiBo.prototype.startTimeTask = function() {
        var self = this;

        function timeTask() {
            if(self.newsIndex >= self.newsList.length) {
                self.newsIndex = 0;
            };
            var news = self.newsList[self.newsIndex];
            if(news) {
                self.showNews(news);
            }

            if(self.policyIndex >= self.policyList.length) {
                self.policyIndex = 0;
            };
            var policy = self.policyList[self.policyIndex];
            if(policy) {
                self.showPolicy(policy);
            }

            self.newsIndex++;
            self.policyIndex++;
        }
        timeTask();
        window.setInterval(timeTask, 15 * 1000);
    }
    return OfficalWeiBo;
});