var teamInfo = {
  "UOregon": {
    "name": "UOregon",
    "reportID" : "2BDD46OFORJL",
  },
  "ED-NAU": {
    "name": "ED_NAU",
    "reportID" : "5ZVN0HN1LMPB",
  },
  "OUC": {
    "name": "OUC",
    "reportID" : "44E5LULPN1VU",
  },
  "NEFU_China": {
    "name": "NEFU_China",
    "reportID" : "XG3JNZ434JRF",
  },
  "CSU_CHINA": {
    "name": "CSU_CHINA",
    "reportID" : "MPBMJLBNO8B8",
  },
  "OUC-Marine_Drugs": {
    "name": "OUC-Marine Drugs",
    "reportID" : "3BM0JCCUO84F",
  },
  "Vilnius_GMC": {
    "name": "Vilnius GMC",
    "reportID" : "VQWJNEADY85P",
  },
  "Edinburgh": {
    "name": "Edinburgh",
    "reportID": "RR42DRZZINRH",
  },
  "CPU_CHINA_2021": {
    "name": "CPU_CHINA 2021",
    "reportID" : "55B9LYA2L7SD",
  },
  "Imperial": {
    "name": "Imperial",
    "reportID" : "Q8QU85D3KE69",
  },
};

function updateTeamInfoModal(id) {
  document.querySelector('#teamInfoModalLabel').innerHTML = teamInfo[id].name;
  document.querySelector('#teamWikiLink').setAttribute('href', `https://idec2021.github.io/${id}`);
  document.querySelector('#teamReportLink').setAttribute('href', `https://arxiv.idec.io/article/${teamInfo[id].reportID}`);
}