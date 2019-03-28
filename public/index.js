const catalogue = [
	{
		'num': '023',
		'title': 'Walden',
		'designerName': 'Jaana Kojonkoski',
		'designerImg': 'https://www.azuremagazine.com/wp-content/uploads/2016/03/Azure-Designer-Profile-Kristine-Five-Melvaer-01.jpg',
		'url': '/images/sea_view.jpeg',
		'article': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus id magni ad non iure ut quidem nam perferendis consectetur laudantium a cumque vel odit nesciunt, similique ipsa reprehenderit corporis adipisci eaque quo? Doloribus modi quos autem animi quidem eaque provident ad corrupti unde, nisi minus velit cum hic possimus, ea reprehenderit! Officia in aspernatur, deserunt nobis optio ipsum reiciendis nostrum iusto doloremque qui rem. Dolores molestiae eius aperiam. Dolorum nemo, facere earum provident nihil doloremque corrupti ducimus? Sint asperiores saepe nesciunt sed vitae, magnam voluptatem blanditiis ut adipisci non possimus temporibus tempore a dolor eaque excepturi facere quos quaerat nisi. Non eum vel molestias saepe pariatur, voluptatem expedita ab. Pariatur quae saepe excepturi quas ab voluptatum temporibus similique tenetur hic?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic atque temporibus fugit quam recusandae minus porro quas libero autem adipisci culpa quisquam aliquam minima optio blanditiis aut ab esse dolor quia enim, ut expedita quibusdam. Beatae officiis facere nemo error sapiente, consequuntur illo asperiores aliquam rerum mollitia accusamus nobis laborum minima magni tempore ad perspiciatis. Illo dolore veniam magnam ad expedita, facilis ipsa animi accusantium, dolor repellat eum porro, voluptate corrupti labore! Unde est quisquam reiciendis libero, exercitationem, tempora amet vitae eveniet alias iste voluptatum? Amet aliquid magni ex nulla?'
	},
	{
		'num': '041',
		'title': 'Silent spring',
		'designerName': 'Dieter Schulz',
		'designerImg': 'https://i.pinimg.com/236x/17/7b/26/177b2686855f5393c8339217c4824b58--tom-dixon-art-design.jpg',
		'url': '/images/big_lamp.jpeg',
		'article': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit voluptatem, perferendis rerum voluptas nostrum mollitia in dicta ducimus aut sint repellat! Optio recusandae perspiciatis dolore nesciunt eaque dolor quis, illum ad cumque sapiente amet debitis quasi, ullam autem accusamus hic ducimus iure corrupti neque quos placeat vero? Tempore facilis rem deserunt. Quo quam atque provident nesciunt illo, rem obcaecati ex suscipit, reiciendis magni assumenda dicta dolorum explicabo pariatur soluta voluptas quod excepturi quidem sequi.   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa vero, ex unde maiores eius ullam, autem odit consectetur quidem ut dignissimos soluta excepturi mollitia in quo! Architecto velit consectetur mollitia, eligendi ab veritatis nisi vero. Quisquam voluptatum magni quas, magnam laudantium repellendus maiores repudiandae, veritatis consequuntur facere expedita iusto necessitatibus, eius dolore sint aut a dicta. Laborum vel nesciunt itaque eligendi esse, magni totam aut sed atque illum vero et necessitatibus tempora assumenda molestiae praesentium! Ab neque quos obcaecati reprehenderit non!'
	},
	{
		'num': '008',
		'title': 'A walk in the woods',
		'designerName': 'Christine T. Knudsen',
		'designerImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDBcpx17spu8Z9jBKY1s9wqZlg32JjsHEfQrHjQ1f1wac9yTb',
		'url': '/images/wood_everywhere.jpeg',
		'article': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa error quidem expedita quam eos pariatur ipsa quibusdam debitis, illum consequuntur iste dolores deserunt mollitia dolorem iusto autem ea officiis dolore. Incidunt veniam reiciendis molestias eaque dolore, aliquam dignissimos voluptatum rerum. Soluta animi maiores laboriosam voluptatem fugiat fuga, consectetur obcaecati doloribus, praesentium aut, ut facilis quidem asperiores perspiciatis. Non, debitis consequatur tempora voluptas eveniet qui atque repudiandae dignissimos officiis reiciendis in a dolore corporis dolorum voluptates nostrum fugiat corrupti quod illo cupiditate iste fugit. Vitae ullam id voluptatem eos fugiat, odit quia accusantium.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla accusamus incidunt aliquam. Debitis amet sed, consequuntur nihil cum facere repellendus nulla unde rem, mollitia non porro ratione blanditiis ex magni. Quod exercitationem ea aut rem alias, sapiente id quisquam, hic tempora magni ut modi expedita laudantium harum molestiae voluptatibus repellat aliquam quos ipsum.'
	}
];

setMainDisplay(catalogue[0]);

let curr = 0;
$('#arrow-left').click(() => {
	curr =  (curr - 1) % catalogue.length;
	$('main > img').animate({opacity: 0.2}, 800, 
		() => setMainDisplay(catalogue[curr]));
});

$('#arrow-right').click(() => {
	curr =  (curr + 1) % catalogue.length;
	$('main > img').animate({opacity: 0.2}, 800, 
		() => setMainDisplay(catalogue[curr]));
});

// This menu is displayed only on small screens, smaller than 800px
$('#menu-btn').click(() => {
	$('#small-brand').toggleClass('color-white');
	$('#menu-btn').toggleClass('rotate45');
	$('.small-nav-item').toggleClass('hide-small-nav-item')
});

function setMainDisplay(house) {
	$('#catalogue-num').text(house['num']);
	$('main > img').attr('src', house['url']);
	$('#title').text(house['title']);
	$('#author-name').text(house['designerName']);
	$('#author > img').attr('src', house['designerImg']);
	$('article').text(house['article']);
	$('main > img').animate({opacity: 1}, 800);
}