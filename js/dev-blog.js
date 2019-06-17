// Replace the username with your own
fetch('https://dev.to/api/articles?username=ashraful')
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		for (let key in myJson) {
			// Change the number below to regulate how many posts are displayed (default is 6)			
			if (key < 6) {
			let coverImage = '';
			// The if statement below uses a placeholder if there is no cover image for the blog post
			if (myJson[key].cover_image === null) {
				coverImage = 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/19400241_811852818991041_2648134815651729853_o.jpg?_nc_cat=102&_nc_ht=scontent-lhr3-1.xx&oh=36fe5e5de2eccddc8578075d03f8ced5&oe=5D6E3023';
			} else {
				coverImage = myJson[key].cover_image;
			}
			let title = myJson[key].title;
			let reactionsCount = myJson[key].positive_reactions_count;
			let commentsCount = myJson[key].comments_count;
			let description = myJson[key].description;
			let url = myJson[key].url;
			let codeBlock = "<div class='post-card'><div class='gradient_overlay'><img class='cover_image' src='" + coverImage + "' alt='Blog post cover image'></div><h3 class='blog_title'>" + title + "</h3><div class='reactions'><i class='fas fa-heart'></i>" + reactionsCount + "&nbsp<i class='fas fa-comment-alt'></i>" + commentsCount + "</div><p class='blog_description'>" + description + "</p><div class='footer'><a href='" + url + "' target='_blank'>Read post <i class='fas fa-long-arrow-alt-right'></i></a></div></div>";
			const container = document.getElementById("blog-container");
			container.innerHTML += codeBlock;
			}
		}
});