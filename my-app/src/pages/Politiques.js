import React from "react";
import MainLayout from "../layouts/MainLayout";
import Container from "react-bootstrap/Container";

const Politiques = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <h2 className="text-center ssligne">Politiques de confidentialité</h2>
          <p className="justif">
            Dans le cadre de notre activité nous sommes amenés à traiter des
            informations vous concernant. En remplissant notre formulaire de
            contact ou notre formulaire de demande de devis vous nous
            transmettez des informations (données personnelles) de nature à vous
            identifier.<br></br> La présente politique de confidentialité vous
            informe de la manière dont nous traitons ces informations. Nous vous
            recommandons de prendre connaissance de ce document.
          </p>
          <h3 className="text-center ssligne">1. Collecte des informations</h3>
          <p className="justif">
            Nous recueillons des informations lorsque vous remplissez notre
            formulaire de contact <a href="/Contact"> Contact</a> ou notre
            formulaire de demande de devis <a href="/Devis">Devis</a>. <br></br>
            Les informations recueillies incluent obligatoirement votre prénom,
            votre nom, votre e-mail, votre numéro de téléphone et votre adresse
            ainsi que votre demande.
          </p>
          <h3 className="text-center ssligne">
            2. Utilisation des informations
          </h3>
          <p className="justif">
            Toutes les informations que nous recueillons peuvent être utilisées
            pour :
          </p>
          <ul>
            <li>vous contacter par e-mail ou par téléphone</li>
            <li>répondre à vos questions, attentes ou problématiques</li>
            <li>
              vous proposer des solutions commerciales adaptées à vos demandes
            </li>
            <li>répondre à vos besoins de prises en charge</li>
            <li>améliorer notre service de relation client</li>
            <li>améliorer notre site</li>
            <li>
              établir des devis, des factures en lien avec les prestations ou
              services demandés
            </li>
          </ul>
          <h3 className="text-center ssligne">
            3. Communication des informations
          </h3>
          <p className="jusitif">
            Nous sommes les seuls propriétaires des informations recueillies sur
            ce site. Vos informations personnelles ne sont pas vendues,
            échangées, transférées, données ou transmises de quelque façon que
            ce soit à un tiers pour n’importe quelle raison, sans votre
            consentement.<br></br> Nous pouvons cependant communiquer vos
            informations à un organisme gouvernemental qui fait valoir son
            autorité légitime d’obtenir ces données ou lorsque nous avons des
            motifs raisonnables de croire que les renseignements pourraient être
            utiles dans le cadre d’une enquête visant une activité illicite, ou
            pour nous conformer à une assignation, un mandat ou une ordonnance
            émanant d’un tribunal, d’une personne ou d’un organisme compétent.
          </p>
          <h3 className="text-center ssligne">4. Contrôle des informations </h3>
          <p className="justif">
            Vous conservez un contrôle total et un droit de regard sur les
            informations personnelles que vous nous transmettez. Vous pouvez
            exercer ce contrôle et consulter, rectifier ou demander la
            suppression totale ou partielle de ces informations sur simple
            demande écrite à l’adresse suivante : Entreprise Charpente
            Couverture en Sarthe, Chemin de Champagné, « Lieu-dit le Pré de
            l’étang » 72 470 St Mars la Brière.
          </p>
          <h3 className="text-center ssligne">5. Stockage des informations</h3>
          <p className="justif">
            Les informations recueillies par le biais de ce site sont stockées
            sur des appareils numériques, ordinateurs et serveurs de notre
            hébergeur (OVH) et locaux appartenant à notre société. Seuls des
            collaborateurs de l’entreprise peuvent y accéder. Nous prenons
            toutes les précautions techniques et organisationnelles nécessaires
            et raisonnables pour prévenir et empêcher la perte, l’abus ou
            l’altération de vos informations personnelles. Nos systèmes sont
            équipés de pare-feu et de solutions antivirales régulièrement mises
            à jour.
          </p>
          <h3 className="text-center ssligne">
            6. Durée de conservation des informations
          </h3>
          <p className="justif">
            Nous conservons vos informations pendant toute la durée nécessaire à
            la bonne conduite des échanges qui découlent de notre relation
            client / prestataire.<br></br> Il se peut que nous conservions vos
            informations au-delà de cette durée en raison d’exigences légales de
            conservation d’archives (garanties décennales) et de documents
            contractuels spécifiques à notre activité liée aux professionnels du
            bâtiment
          </p>
          <h3 className="text-center ssligne">7. Acceptation</h3>
          <p className="justif">
            Pour transmettre vos informations vous devez accepter pleinement la
            présente politique de confidentialité.<br></br> L’envoi
            d’informations via nos formulaires ne peut se faire sans avoir coché
            au préalable une case qui confirme votre prise de connaissance de
            cette politique.
          </p>
        </Container>
      </MainLayout>
    </div>
  );
};

export default Politiques;
