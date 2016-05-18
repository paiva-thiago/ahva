<?php
    require "incs/conex.php";	
    require "incs/sec.php";	
    $nm_log=$_POST["txtLog"];
    $nm_sen=$_POST["txtPwd"];
    $cnx=liga();
    $sql = "SELECT * FROM `chaveiro` where  `chaveiro`.`nm_login`=:log";
    $stmt = $cnx->prepare( $sql );
    $stmt->bindParam( ':log', $nm_log );
    $stmt->execute();
    $rows = $stmt->fetchAll();
    $qt=count($rows);
    if ($qt==0){
        echo json_encode(array("code"=>"1","msg"=>"Senha incorreta confere ou login inexistente!")); 
    }else{
        $row=$rows[0];
        if ($row[2]==strrev(md5($nm_sen))){
            echo json_encode(array("code"=>"0","idusr"=>$row[0],"email"=>$row[1],"dtNovo"=>$row[3],"dtAtu"=>$row[4])); 
        }else{
            echo json_encode(array("code"=>"2","msg"=>"Senha incorreta ou login inexistente!")); 
        }
    }
    $cnx=null;
?>