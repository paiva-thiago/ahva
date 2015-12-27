<?php

    define( 'MYSQL_HOST', 'mysql.thiagopaiva.com' );
    define( 'MYSQL_USER', 'thiagopaiva' );
    define( 'MYSQL_PASSWORD', 's4r1u5' );
    define( 'MYSQL_DB_NAME', 'thiagopaiva' );
    
    function liga(){
        $PDO=false;
        try
        {
            $PDO = new PDO( 'mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD );
        }
        catch ( PDOException $e )
        {
            echo 'Erro ao conectar com o MySQL: ' . $e->getMessage();
        }   
        return $PDO;        
    }

  
?>