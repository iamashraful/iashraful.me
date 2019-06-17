var app = new Vue({
    el: '#dev-blog',
    data: {
        message: 'Hello Vue!',
        img: 'https://thepracticaldev.s3.amazonaws.com/i/dr0c66q19h0rkz3w1wah.png',
        posts: []
    },
    mounted() {
        fetch('https://dev.to/api/articles?username=ashraful').then((response) => {
            return response.json()
        }).then((data) => {
            this.posts = data;
        })
    },
    filters: {
        humanDate(value) {
            var d = new Date(value);
            return d.toDateString();
        }
    }
});
