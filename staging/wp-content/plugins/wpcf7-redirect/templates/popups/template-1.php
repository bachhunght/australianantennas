<?php
/**
 *  Popup Template Name: 50-50 With Image Template
 */

defined( 'ABSPATH' ) || exit;
?>

<div class="modal-container">
	<div class="modal-left">
		<h1 class="modal-title" style="color:{{template_title_color.color}}">{{template_title.text}}</h1>
		<p class="modal-desc">{{template_description.description}}</p>
		<div class="modal-buttons">
			<a href="{{template_button1_link.url}}" class="" style="color:{{template_button1_color.color}}">{{template_button1.text}}</a>
		</div>

		<p class="sign-up"><span style="color:{{template_footer_text_color.color}}">{{template_footer_text.text}}</span> <a href="{{template_footer_button_link.url}}" style="color:{{template_footer_button_link_color.color}}">{{template_footer_button_text.text}}</a></p>
	</div>
	<div class="modal-right">
		<img src="{{template_image.media}}" alt="">
	</div>
	<button class="icon-button close-button">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
			<path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
		</svg>
	</button>
</div>
