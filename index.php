<?php
$name = $email = $Objetdumail = $message = "";
$nameError = $emailError = $ObjetdumailError = $messageError = "";
$isSuccess =false;
$emailTo="catherine_jouret@yahoo.com";

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name= verifyInput($_POST["name"]);
    $email= verifyInput($_POST["email"]);
    $Objetdumail= verifyInput($_POST["Objetdumail"]);
    $message= verifyInput($_POST["message"]);
    $isSuccess=true;
    $emailText="";

    if(empty($name)){
      $nameError="Veuillez précisez votre nom";
      $isSuccess=false;
    }
    else{
      $emailText .="name: $name\n";
    }
      

      if(!isEmail($email)){
        $emailError="Veuillez indiquer une adresse mail valide";
        $isSuccess=false;
      }
      else{
        $emailText .="E-mail: $email\n";
      }
      
    
    if(empty($Objetdumail)){
      $ObjetdumailError="Veuillez renseigner l'objet de votre message";
      $isSuccess=false;
    }
    else{
      $emailText .="Objet du mail: $Objetdumail\n";
    }
    

    if(empty($message)){
      $messageError="Veuillez rédiger un message";
      $isSuccess=false;
    }
    else{
      $emailText .="Message: $message\n";
    }
    



    if($isSuccess){
      $headers="From: $name <$email>\r\nReply-To:$email";
      mail($emailTo, "Un message de votre site", $emailText, $headers);
      
    }
}

function isEmail($var){
  return filter_var($var, FILTER_VALIDATE_EMAIL);
}

function verifyInput($var){
  $var=trim($var);
  $var=stripcslashes($var);
  $var=htmlspecialchars($var);
  return $var;
}

?>



<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


    <link href="https://fonts.googleapis.com/css2?family=Cagliostro&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;600;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">

    <title>Portfolio</title>
</head>
<body>

<!-- Header -->
    <header>
      <div class="container">
    <h1>Portfolio</h1>

    <div class="col-xs-2 socialMedia">
      
      <a href="https://www.facebook.com/CathylleArt/" target="_blank"><img src="img/icon_facebook.svg" alt="Facebook"></a>
      <a href="https://www.linkedin.com/in/catherine-jouret-a11316149/" target="_blank"><img src="img/icon_linkedin.svg" alt="LinkedIn"></a>
      <a href="https://www.instagram.com/cathjrt/?hl=fr" target="_blank"><img src="img/icon_instagram.svg" alt="Instragram"></a>
    </div>

    <ul class="encres xs-md-10">
        <li><a href="#apropos" class="lienAncre">à propos </a></li>
        <li><a href="#real" class="lienAncre">Réalisations </a></li>
        <li><a href="#contact" class="lienAncre">Contact </a></li>
    </ul>

    <h3 class="col-xs-12">Catherine Jouret</h3>
    <div class="wrapper show col-xs-12">
      <div class="scrollWrap">
          <a class="scroll lienAncre" href="#apropos"> Scroll</a>
      </div>
  </div>
</div>
</header>


    <section id="apropos">
    
<div class="container">
  <img src="img/img-apropospierre.png" class="rocimg col-md-3 hidden-xs hidden-sm pull-left" alt="">
  <div class="row">
    <h2>à propos</h2>
    <p class="textepropos col-md-8 col-xs-12 pull-right">Passionnée par le dessin et le graphisme, j’ai étudié l’Infographie en 2015 dans la Haute École Albert Jacquard, après avoir obtenu un bachelier universitaire en Psychologie et en Sciences de l’Éducation. Mon parcours atypique m’a permis d’exacerber mon empathie, mon sens de l’observation et d’analyse. Mes principales compétences concernent l’illustration faite sur ordinateur, la peinture digitale, la communication visuelle, la création de design et le développement de projet web, tant lié à l’apparence de l’interface qu’à l’expérience utilisateur.</p></div>
  



<div class="competences pull-right col-md-8 col-xs-12 d-flex bd-highlight mb-3">

  <div class="col-sm-4 p-2 bd-highlight">
    <div class="">
      <div class="pic "></div>
        <div class="caption">
          <p>Illustration</p>
        </div>
      </a>
    </div>
  </div>
  <div class="col-sm-4 p-2 bd-highlight">
    <div class="">
      <div class="pic "></div>
        <div class="caption">
          <p>Communication visuelle</p>
        </div>
      </a>
    </div>
  </div>
  <div class="col-sm-4 p-2 bd-highlight">
    <div class="">
      <div class="pic "></div>
        <div class="caption">
          <p>Web design</p>
        </div>
      </a>
    </div>
  </div>
</div>

    </section>
    <img src="img/img-apropos.png">



    <section  id="real">
      <div class="container">
        <h2 >Réalisations</h2>
        <p class="col-md-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, accusantium nostrum labore dolor iste et, architecto quas velit repellat odio, dolorum eaque? Dignissimos dolores non, hic perferendis a beatae libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet pariatur nesciunt autem natus, delectus consectetur cumque dolores aspernatur maxime ab quibusdam enim possimus perferendis minima inventore magni ullam magnam accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut tempora itaque deleniti rem numquam est, magnam accusamus minus nemo reiciendis mollitia consequatur doloremque repellat error inventore voluptates, voluptatibus assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img class="vaisseau col-md-6 hidden-xs hidden-sm" src="img/img-vaisseau.png">
        <div class="col-md-6 boutontrav pull-right">
        <div class="pic col-md-6"></div>
        <div class="pic col-md-6"></div>
        <div class="pic col-md-6"></div>
        <div class="pic col-md-6"></div>
      </div>

      </div>
      <div class="container">
        <div class="pictureprez"></div>
        <button class="btn btnplus col-xs-12 btn-primary ">Voir plus</button>
      </div>
     
      
    </section>




    <footer   id="contact">
      <div class="container">
        <h2 class="col-xs-12">Contact</h2>
        <div class="container">
          
        <div class="coordonnees col-md-6 col-xs-12">
        <h3>Catherine Jouret</h3>
        <h4>E-mail</h4>
        <a href="mailto:catherine_jouret@yahoo.com">catherine_jouret@yahoo.com</a>
        <h4>Téléphone</h4>
        <a href="tel:+32494489411">+32 494/48.94.11</a>
        </div>
        
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" role="form" class="col-md-5 col-xs-12">
            <div class="form-group">
              <label for="name">Nom:</label>
                <input type="name" class="form-control" id="name" name="name" placeholder="Nom" value="<?php echo htmlspecialchars($name);?>">
                <p><?php echo $nameError;?></p>
              </div>


            <div class="form-group">
              <label for="email">E-mail:</label>
              <input type="email" class="form-control" required name="email" id="email" placeholder="E-mail" value="<?php echo htmlspecialchars($email);?>">
              <p><?php echo $emailError;?></p>
            </div>

            
            <div class="form-group">
              <label for="Objetdumail">Objet du mail:</label>
                <input type="objet" class="form-control" id="Objetdumail" name="Objetdumail" placeholder="Objet du mail" value="<?php echo htmlspecialchars($Objetdumail);?>">
                <p><?php echo $ObjetdumailError;?></p>
            </div>

            <div class="form-group">
              <label for="message">Message:</label>
                <textarea class="form-control" required name="message" id="message" style="width:100%;" rows="10"  placeholder="Message"><?php echo htmlspecialchars($message); ?></textarea>
                <p><?php echo $messageError;?></p>
              </div>

            <button type="submit" name="submit" value="Submit" class="btn btn-primary pull-right">Envoyer</button>

            <p class="merci" style="display:<?php if($isSuccess) echo'block'; else echo'none';?>">Merci pour votre message!</p>

          </form>

        </div>
        
          <div class="col-xs-2 socialMedia">
      
            <a href="https://www.facebook.com/CathylleArt/" target="_blank"><img src="img/icon_facebook.svg" alt="Facebook"></a>
            <a href="https://www.linkedin.com/in/catherine-jouret-a11316149/" target="_blank"><img src="img/icon_linkedin.svg" alt="LinkedIn"></a>
            <a href="https://www.instagram.com/cathjrt/?hl=fr" target="_blank"><img src="img/icon_instagram.svg" alt="Instragram"></a>
          </div>
        </div>
        
    </footer>

<script src="main.js"></script>
</body>
</html>