<?php include('INCLUDES/header.php');?>
<div id="mobile-menu" class="l-hidden m-hidden s-hidden-x12">
	<div id="fade"></div>
	<div id="menu-content">
		<ul class="x10">
    		<li class="x12" id="close-menu"><button onclick="hideMenu(); return false;">Close</button></li>
    		<li class="x12"><a href="index.php">Home</a></li>
    		<li class="x12"><a href="aboutus.php">About</a></li>
    		<li class="x12"><a href="gallery.php">Gallery</a></li>
    		<li class="x12"><a href="contactus.php">Contact</a></li>
    		<li class="x12"><a href="">Order online</a></li>
		</ul>
		<div id="social-media" class="x12">
			<ul>							
				<li class="x4 social-icon"><a href=""><img src="IMAGES/instagram.png" alt="" height="20px"></a></li>
				<li class="x4 social-icon"><a href=""><img src="IMAGES/twitter.png" alt="" height="20px"></a></li>
				<li class="x4 social-icon"><a href=""><img src="IMAGES/facebook.png" alt="" height="20px"></a></li>
			</ul>
		</div> 
	</div>
	
</div>
<div class="conatiner l12 m12 s12 x12" id="main-wrapper">
<?php  include('INCLUDES/head-2.php'); ?>
<div id="contact-us-form-container" class="l12 m12 s12 x12">
	<!-- <div id="contact-us-form-heading" class="l12 m12 s12 x12">
		<h6>CONTACT US</h6>
	</div>
	<div id="contact-us-form-sub-heading" class="l12 m12 s12 x12">
		<h6>Lorem Ipsunm Dipsum Nipsum</h6>
	</div>  -->
	
	<div id="address-container" class="l6 m6 s6 x12">
		<div id="address-container-heading" class="heading l12 m12 s12 x12">
			<h6>Reach Us At</h6>
		</div>
		<div id="address-container-content" class="heading l12 m12 s12 x12">
			<div id="location" class="l12 m12 s12 x12">
				<div id="location-icon" class="address-icon l2 m2 s2 x12"></div>
				<div id="location-content" class="address-content l4 m6 s6 x12">
					<strong>ParathaHaat</strong>
					<br>XYZ, Khirki Villag
					<br>Malviya Nagar , New Delhi - 110022<br>
				</div>
			</div>
			<div id="phone" class="l12 m12 s12 x12">
				<div id="phone-icon" class="address-icon l2 m2 s2 x12"></div>
				<div id="phone-content" class="address-content l4 m6 s6 x12">
					<p>+91 9235154355
					<br>+91 1225484589<br>
					011 26536542</p>

				</div>
			</div>
			<div id="mail" class="l12 m12 s12 x12">
				<div id="mail-icon" class="address-icon l2 m2 s2 x12"></div>
				<div id="mail-content" class="address-content l4 m6 s6 x12">
					<p>xyz1234@gmail.com<br>
					yzxsc2365@gmail.com
					</p>

				</div>
			</div>
		</div>
	</div>
	<div id="form-container" class="l4 m4 s4 x12">
		<div id="form-container-heading" class="heading l12 m12 s12 x12">
			<h6>Feedback Form</h6>
		</div>
		<div id="feedback-from-container" class="l12 m12 s12 x12">
			<form onsubmit="feedBackFormFunction(); return false;"  id="feedback-form">
				<div class="l12 m12 s12 x12">
					<input type="text" name="user_Name" placeholder="Your Name" class="l10 m10 s10 x10" id="user_Name">
				</div>
				<div class="l12 m12 s12 x12">
					<input type="email" name="user_Email" placeholder="Your Email" class="l10 m10 s10 x10" id="user_Email">
				</div>
				
				<div class="l12 m12 s12 x12">
					<input type="text" name="user_Number" placeholder="Your Number" class="l10 m10 s10 x10" id="user_Number">
				</div>
				<div class="l12 m12 s12 x12">
					<textarea name="user_Message" id="user_Message" class="l10 m10 s10 x10" placeholder="Your Message"></textarea>
				</div>
				<div class="l12 m12 s12 x12">
					<button type="submit" id="sendFeedbackButton" class="l10 m10 s10 x10">Send</button>
					<div id="sending-icon" class="l1 m1 s1 x10">
						
					</div>
				</div>
				<div  class="l12 m12 s12 x12">
					<div id="formStatus" class="success l10 m10 s10 x10">
						Thankyou. Your message was sent successfuly.
					</div>
				</div>
				
			</form>
		</div>
	</div>

</div>

<?php  include('INCLUDES/footer.php'); ?>
</div>