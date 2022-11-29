
<center><h1 class="title">Prueba tecnica php</h1></center>
<div class="loader"></div>
<div class="container-fluid images">
	<div class="row">
		<?php foreach ($data as $key => $value){ ?>
			
			<div class="col-md-4">
				<div class="card text-white bg-dark ">
					<div class="card-body">
						
						<div class="row">
							<div class="col-md-6">
								<img class="lazy" data-original="<?php echo $value['image'] ?>" alt="Amish Cyborg">
							</div>
							<div class="col-md-6">
								<h5 class="card-title"><?php echo $value['name'] ?></h5>
								<p class="card-text"><?php echo $value['status'] ?> - <?php echo $value['species'] ?></p>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		<?php }?>
			
	</div>
</div>


