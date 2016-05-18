create schema base;
use base;
CREATE TABLE  `base`.`chaveiro` (
  `ID_CONTA` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `NM_LOGIN` varchar(45) NOT NULL,
  `NM_PASSAPORTE` varchar(180) NOT NULL,
  PRIMARY KEY (`ID_CONTA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
insert into chaveiro (nm_login, NM_PASSAPORTE) values ('admin','admin')