-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Usuario` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `setor` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Bolao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Bolao` (
  `idBolao` INT NOT NULL,
  PRIMARY KEY (`idBolao`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Usuario_has_Bolao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Usuario_has_Bolao` (
  `Usuario_id1` INT NOT NULL,
  `Bolao_idBolao` INT NOT NULL,
  PRIMARY KEY (`Usuario_id1`, `Bolao_idBolao`),
  INDEX `fk_Usuario_has_Usuario_Bolao1_idx` (`Bolao_idBolao` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_has_Usuario_Bolao1`
    FOREIGN KEY (`Bolao_idBolao`)
    REFERENCES `mydb`.`Bolao` (`idBolao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Pagamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Pagamento` (
  `idPagamento` INT NOT NULL,
  `Usuario_has_Bolao_Usuario_id1` INT NOT NULL,
  `Usuario_has_Bolao_Bolao_idBolao` INT NOT NULL,
  `valor` DOUBLE NOT NULL,
  PRIMARY KEY (`idPagamento`, `Usuario_has_Bolao_Usuario_id1`, `Usuario_has_Bolao_Bolao_idBolao`),
  INDEX `fk_Pagamento_Usuario_has_Bolao1_idx` (`Usuario_has_Bolao_Usuario_id1` ASC, `Usuario_has_Bolao_Bolao_idBolao` ASC) VISIBLE,
  CONSTRAINT `fk_Pagamento_Usuario_has_Bolao1`
    FOREIGN KEY (`Usuario_has_Bolao_Usuario_id1` , `Usuario_has_Bolao_Bolao_idBolao`)
    REFERENCES `mydb`.`Usuario_has_Bolao` (`Usuario_id1` , `Bolao_idBolao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Jogo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Jogo` (
  `idJogos` INT NOT NULL,
  `valor` DOUBLE NOT NULL,
  `concurso` VARCHAR(45) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `data` TIMESTAMP NOT NULL,
  `qnt_numeros` INT NOT NULL,
  PRIMARY KEY (`idJogos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Jogos_has_Bolao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Jogos_has_Bolao` (
  `Jogos_idJogos` INT NOT NULL,
  `Bolao_idBolao` INT NOT NULL,
  PRIMARY KEY (`Jogos_idJogos`, `Bolao_idBolao`),
  INDEX `fk_Jogos_has_Bolao_Bolao1_idx` (`Bolao_idBolao` ASC) VISIBLE,
  INDEX `fk_Jogos_has_Bolao_Jogos1_idx` (`Jogos_idJogos` ASC) VISIBLE,
  CONSTRAINT `fk_Jogos_has_Bolao_Jogos1`
    FOREIGN KEY (`Jogos_idJogos`)
    REFERENCES `mydb`.`Jogo` (`idJogos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Jogos_has_Bolao_Bolao1`
    FOREIGN KEY (`Bolao_idBolao`)
    REFERENCES `mydb`.`Bolao` (`idBolao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;