const app = new Vue({
    el: '#app',
    data: {
        title: 'pleaseSaveJSON'
    },
    methods: {
        openCreateTabs: () => {
            alert('create Tabs')
        }
    }
})

const footer = new Vue({
    el: '#footer',
    methods: {
        openCreateTabs: () => {
            chrome.tabs.create({url: 'default.html'}, (cb) => {
                console.log(cb)
            })
        }
    }
})

const listJSON = new Vue({
    el: '#list-json',
    data: {
        items: [
            {title: 'Authenticate'},
            {title: 'ContentGrid'},
            {title: 'Page/Bran'},
            {title: 'Authenticate'},
            {title: 'ContentGrid'},
            {title: 'Page/Bran'},
            {title: 'Authenticate'},
            {title: 'ContentGrid'},
            {title: 'Page/Bran'},
            {title: 'Authenticate'},
            {title: 'ContentGrid'},
            {title: 'Page/Bran'}
        ]
    }
})