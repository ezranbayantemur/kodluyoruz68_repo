import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {job_item} from '../styles/components_styles';

const JobItem = ({job}) => {
  return (
    <View style={job_item.container}>
      <Image
        resizeMode="contain"
        source={{uri: job.company_logo}}
        style={job_item.logo}
      />
      <View style={job_item.footer}>
        <View style={job_item.details}>
          <Text style={job_item.company}>{job.company}</Text>
          <Text style={job_item.title}>{job.title}</Text>
        </View>
        <TouchableOpacity style={job_item.buttonContainer}>
          <Text style={job_item.buttonTitle}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {JobItem};

// "id": "86865d92-3b19-4e98-a441-f08b70290257",
// "type": "Full Time",
// "url": "https://jobs.github.com/positions/86865d92-3b19-4e98-a441-f08b70290257",
// "created_at": "Thu Dec 24 14:20:42 UTC 2020",
// "company": "Tedas",
// "company_url": "http://www.tedas.nl/tedas/over-ons/",
// "location": "Brummen",
// "title": ".NET/C# Software engineer",
// "description": "<p><strong>.NET/C# Software engineer</strong></p>\n<p><em>Brummen, 40 uur per week</em></p>\n<p>Ben je bekwaam in het ontwikkelen van front- en backend applicaties? Wil je graag de puzzels oplossen die binnen frameworks voorkomen? Wil je meewerken aan de informatiebeveiliging van onze vitale infrastructuur in Nederland? Wegens groei van de organisatie zijn we op zoek naar meerdere collega’s. Dus ben je een junior-, medior-, of senior engineer? Reageer dan zeker en wie weet ben je onze nieuwe collega in 2021 als .NET/C# Software engineer.</p>\n<p><strong>Wat ga je doen</strong></p>\n<p>Bij Tedas staat het verbeteren en implementeren van digitale weerbaarheid van onze klanten in de vitale infrastructuur voorop. Vanuit je rol als .NET/ C# Software engineer ga je je vooral bezighouden met ons eigen framework Fusion. Samen met je collega’s verbeter je en pas je daar waar nodig de verschillende front- en backend applicaties aan zodat we een optimale informatiebeveiligingsstructuur aanbieden en in stand houden. Met je collega’s denk je actief mee aan de ontwikkeling van ons framework Fusion. Met jouw actuele kennis van de nieuwste technieken kunnen we het framework nog beter maken. Onderdeel van de rol is ook het ondersteunen van andere afdelingen bij de verschillende werkzaamheden. Als IT-organisatie werken we zoveel als mogelijk binnen elk team volgens de Scrum-methode.</p>\n<p><strong>Wat breng je mee</strong></p>\n<ul>\n<li>Enthousiasme, ondernemerschap, vermogen om zaken te analyseren en ook op te lossen en natuurlijk humor.</li>\n<li>(Ruime) <strong>kennis</strong> op het gebied van <strong>C#</strong>, <strong>.NET</strong> en <strong>microservices</strong>.</li>\n<li>\n<strong>Ervaring</strong> met <strong>middleware</strong> zoals AMQP.</li>\n<li>Kennis en ervaring met Docker en React geeft je zeker een streepje voor.</li>\n<li>Communicatief vaardig in de <strong>Nederlandse</strong> en <strong>Engelse taal</strong>, mondeling en schriftelijk.</li>\n<li>Minimaal een relevante afgeronde <strong>hbo</strong>-<strong>opleiding</strong>.</li>\n</ul>\n<p><strong>Wat bieden we jou</strong></p>\n<ul>\n<li>Een werkweek van maximaal 40 uur per week.</li>\n<li>Een bruto salaris tussen de € 3.000,- en € 4.000,- per maand.</li>\n<li>25 vakantiedagen per kalenderjaar.</li>\n<li>8% vakantietoeslag.</li>\n<li>Deelname pensioenfonds Nationale Nederlanden.</li>\n<li>Ruime reiskostenvergoeding woon-werkverkeer.</li>\n<li>Wekelijks patat op vrijdag.</li>\n<li>Vrij vanaf 15.00 uur op 5, 24 en 31 december.</li>\n<li>Cursus- en opleidingsmogelijkheden.</li>\n<li>Attentie op je verjaardag.</li>\n<li>Verse Nespresso koffie.</li>\n<li>........Ga zo maar door.</li>\n</ul>\n<p><strong>Wie zijn wij</strong></p>\n<p>Werken bij Tedas betekent dat je substantiële meerwaarde levert aan de digitale weerbaarheid van onze klanten. Denk daarbij aan Defensie, Opsporings- en Inlichtingen- &amp; Veiligheidsdiensten en leveranciers van de vitale infrastructuur. Tedas is een innovatief bedrijf waarin iedere medewerker zich bewust is van de maatschappelijke relevantie van onze activiteiten. Op dit moment zijn we met ruim 30 collega’s en is er ruimte voor meer collega’s.</p>\n<p>Binnen Tedas heerst een informele en ontspannen sfeer waar in alle openheid wordt gecommuniceerd en waar mensen zich op hun gemak voelen. Een prima klimaat om onze doelstellingen te behalen.</p>\n<p>Ons kantoor is gevestigd in Brummen en goed bereikbaar vanuit Ede-Wageningen, Arnhem, Amersfoort, Zwolle, Zutphen en Deventer. We werken met name volgens de Agile methode aan de verschillende applicaties en netwerken die we samen met onze eindklant ontwerpen en ontwikkelen.</p>\n<p><strong>Geïnteresseerd</strong></p>\n<p>Spreken niet alleen onze arbeidsvoorwaarden je aan, maar ook de inhoud van het werk dat je voor een veiliger Nederland gaat doen? Of wil je eerst nog meer informatie? Bel met Ellen Langelaar, teamleider, via telefoonnummer 06-12 12 04 83.</p>\n<p>Wil je reageren op deze vacature? Mail dan je motivatie en cv naar <a href=\"mailto:werkenbij@tedas.nl\"><strong>werkenbij@tedas.nl</strong></a>. Reageren <strong>voor 15 januari 2021</strong>.</p>\n<p><em>Acquisitie naar aanleiding van deze vacature wordt niet op prijs gesteld.</em><img src=\"https://camo.githubusercontent.com/68e6b08858bc67393a906037af6ab699d3287dc8/68747470733a2f2f62636f6e74726f6c2e62726f636b6d657965722e6e6c2f747261636b2e7068703f6f7264657269643d323135303530\"></p>\n",
// "how_to_apply": "<p><a href=\"https://ltpx.nl/9DAPiVv\">Klik hier om te solliciteren</a></p>\n",
// "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWVUIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da81cb51d920fbc0474b1e97026c0ffc2a6815db/Tedas_logo_liggend_fc-300.png"
