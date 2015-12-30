<?php
    header('Content-Type: text/json');
	require "incs/conex.php";	
    $nm_log=$_POST["txtLogin"];
    $nm_sen=$_POST["txtPwd"];
    $cnx=liga();
    $sql = "SELECT * FROM `0A_chaveiro` where  `0A_chaveiro`.`nm_email`=:log";
    $stmt = $cnx->prepare( $sql );
    $stmt->bindParam( ':log', $nm_log );
    $stmt->execute();
    $rows = $stmt->fetchAll();
    $qt=count($rows);
    if ($qt==0){
        echo "{code:\"1\",msg:\"Senha nao confere ou login inexistente!\"}";
    }else{
        $row=$rows[0];
        if ($row[2]==strrev(md5($nm_sen))){
            echo "{
                code:\"0\",\n
                idusr:\"".$row[0]."\",\n
                email:\"".$row[1]."\",\n
                dtNovo:\"".$row[3]."\",\n
                dtAtu:\"".$row[4]."\"\n
            }";
        }else{
            echo "{code:\"2\",msg:\"Senha nao confere ou login inexistente!\"}";
        }
    }
    $cnx=null;
?>