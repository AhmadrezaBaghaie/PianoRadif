let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
    {
      "name": "1-Moqaddameh-(Abuata)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/1-Moqaddameh-(Abuata).mp3",
      "folder": "Abuata"
    },
    {
      "name": "10-Masihaei-(Abuata)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/10-Masihaei-(Abuata).mp3",
      "folder": "Abuata"
    },
    {
      "name": "2-Zarbi-(Abuata)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/2-Zarbi-(Abuata).mp3",
      "folder": "Abuata"
    },
    {
      "name": "3-Chaharmezrab-(Abuata)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/3-Chaharmezrab-(Abuata).mp3",
      "folder": "Abuata"
    },
    {
      "name": "4-Daramad-(Abuata)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/4-Daramad-(Abuata).mp3",
      "folder": "Abuata"
    },
    {
      "name": "5-Sayakhi-(Abuata)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/5-Sayakhi-(Abuata).mp3",
      "folder": "Abuata"
    },
    {
      "name": "6-Yatimak-(Abuata)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/6-Yatimak-(Abuata).mp3",
      "folder": "Abuata"
    },
    {
      "name": "7-Hejaz-(Abuata)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/7-Hejaz-(Abuata).mp3",
      "folder": "Abuata"
    },
    {
      "name": "8-Chaharpareh-(Abuata)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/8-Chaharpareh-(Abuata).mp3",
      "folder": "Abuata"
    },
    {
      "name": "9-Gabri-(Abuata)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/9-Gabri-(Abuata).mp3",
      "folder": "Abuata"
    },
    {
      "name": "1-Moqaddameh-(Afshari)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/1-Moqaddameh-(Afshari).mp3",
      "folder": "Afshari"
    },
    {
      "name": "2-Daramad-(Afshari)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/2-Daramad-(Afshari).mp3",
      "folder": "Afshari"
    },
    {
      "name": "3-Chaharmezrab-(Afshari)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/3-Chaharmezrab-(Afshari).mp3",
      "folder": "Afshari"
    },
    {
      "name": "4-Jameh-daran-(Afshari)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/4-Jameh-daran-(Afshari).mp3",
      "folder": "Afshari"
    },
    {
      "name": "5-Zarbi-(Afshari)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/5-Zarbi-(Afshari).mp3",
      "folder": "Afshari"
    },
    {
      "name": "6-Qaraei-(Afshari)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/6-Qaraei-(Afshari).mp3",
      "folder": "Afshari"
    },
    {
      "name": "7-Araq-(Afshari)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/7-Araq-(Afshari).mp3",
      "folder": "Afshari"
    },
    {
      "name": "8-Rohab-(Afshari)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/8-Rohab-(Afshari).mp3",
      "folder": "Afshari"
    },
    {
      "name": "9-Masnavi-(Afshari)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/9-Masnavi-(Afshari).mp3",
      "folder": "Afshari"
    },
    {
      "name": "1-Moqaddameh-(Bayat-e Esfahan)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Esfahan/1-Moqaddameh-(Bayat-e Esfahan).mp3",
      "folder": "Bayat-e-Esfahan"
    },
    {
      "name": "2-Chaharmezrab-(Bayat-e Esfahan)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Esfahan/2-Chaharmezrab-(Bayat-e Esfahan).mp3",
      "folder": "Bayat-e-Esfahan"
    },
    {
      "name": "3-Daramad-(Bayat-e Esfahan)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Esfahan/3-Daramad-(Bayat-e Esfahan).mp3",
      "folder": "Bayat-e-Esfahan"
    },
    {
      "name": "4-Bayat-e Rajeh-o Zarbi-(Bayat-e Esfahan)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Esfahan/4-Bayat-e Rajeh-o Zarbi-(Bayat-e Esfahan).mp3",
      "folder": "Bayat-e-Esfahan"
    },
    {
      "name": "5-Oshshaq-(Bayat-e Esfahan)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Esfahan/5-Oshshaq-(Bayat-e Esfahan).mp3",
      "folder": "Bayat-e-Esfahan"
    },
    {
      "name": "6-Masnavi-(Bayat-e Esfahan)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Esfahan/6-Masnavi-(Bayat-e Esfahan).mp3",
      "folder": "Bayat-e-Esfahan"
    },
    {
      "name": "1-Moqaddameh-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/1-Moqaddameh-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "10-Shahabi-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/10-Shahabi-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "11-Feyli-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/11-Feyli-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "12-Shekasteh-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/12-Shekasteh-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "13-Masnavi-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/13-Masnavi-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "2-Chaharmezrab-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/2-Chaharmezrab-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "3-Daramad-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/3-Daramad-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "4-Kereshmeh-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/4-Kereshmeh-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "5-Dad-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/5-Dad-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "6-Zarbi-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/6-Zarbi-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "7-Ruhol-arvah-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/7-Ruhol-arvah-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "8-Mehdi Zarrabi-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/8-Mehdi Zarrabi-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "9-Dogah-(Bayat-e Tork)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/9-Dogah-(Bayat-e Tork).mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "1-Chaharmezrab-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/1-Chaharmezrab-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "10-Masnavi-e Mokhalef-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/10-Masnavi-e Mokhalef-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "11-Hodi-o Pahlavi-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/11-Hodi-o Pahlavi-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "12-Rajaz-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/12-Rajaz-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "13-Mansuri-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/13-Mansuri-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "14-Maghlub-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/14-Maghlub-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "15-Naghmeh Maghlub-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/15-Naghmeh Maghlub-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "2-Daramad-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/2-Daramad-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "3-Naghmeh-Zang-e Shotor-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/3-Naghmeh-Zang-e Shotor-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "4-Mardafkan-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/4-Mardafkan-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "5-Zabol-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/5-Zabol-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "6-Chaharmezrab-e Zabol-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/6-Chaharmezrab-e Zabol-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "7-Basteh Negar-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/7-Basteh Negar-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "8-Hesar-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/8-Hesar-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "9-Mokhalef-(Chahargah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/9-Mokhalef-(Chahargah).mp3",
      "folder": "Chahargah"
    },
    {
      "name": "1-Moqaddameh-(Dashti)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/1-Moqaddameh-(Dashti).mp3",
      "folder": "Dashti"
    },
    {
      "name": "2-Zarbi-e Daramad-(Dashti)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/2-Zarbi-e Daramad-(Dashti).mp3",
      "folder": "Dashti"
    },
    {
      "name": "3-Chaharmezrab-(Dashti)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/3-Chaharmezrab-(Dashti).mp3",
      "folder": "Dashti"
    },
    {
      "name": "4-Daramad-(Dashti)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/4-Daramad-(Dashti).mp3",
      "folder": "Dashti"
    },
    {
      "name": "5-Oshshaq-(Dashti)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/5-Oshshaq-(Dashti).mp3",
      "folder": "Dashti"
    },
    {
      "name": "6-Khosrow-o Shirin-(Dashti)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/6-Khosrow-o Shirin-(Dashti).mp3",
      "folder": "Dashti"
    },
    {
      "name": "7-Gilaki-(Dashti)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/7-Gilaki-(Dashti).mp3",
      "folder": "Dashti"
    },
    {
      "name": "1-Moqaddameh-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/1-Moqaddameh-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "10-Abolchap-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/10-Abolchap-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "11-Zanguleh-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/11-Zanguleh-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "12-Noruz-e Arab-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/12-Noruz-e Arab-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "13-Leyli-o Majnun-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/13-Leyli-o Majnun-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "14-Raz-o Niyaz-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/14-Raz-o Niyaz-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "15-Shushtari-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/15-Shushtari-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "16-Mansuri-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/16-Mansuri-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "17-Bakhtiari-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/17-Bakhtiari-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "18-Zarbi-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/18-Zarbi-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "2-Chaharmezrab-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/2-Chaharmezrab-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "3-Daramad-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/3-Daramad-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "4-Naghmeh-Zange-e shotor-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/4-Naghmeh-Zange-e shotor-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "5-Chakavak-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/5-Chakavak-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "6-Bidad-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/6-Bidad-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "7-Oshshaq-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/7-Oshshaq-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "8-Neydavud-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/8-Neydavud-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "9-Suz-o Godaz-(Homayun)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/9-Suz-o Godaz-(Homayun).mp3",
      "folder": "Homayoun"
    },
    {
      "name": "1-Daramad-(Mahur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/1-Daramad-(Mahur).mp3",
      "folder": "Mahoor"
    },
    {
      "name": "10-Araq-(Mahur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/10-Araq-(Mahur).mp3",
      "folder": "Mahoor"
    },
    {
      "name": "2-Kereshmeh-(Mahur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/2-Kereshmeh-(Mahur).mp3",
      "folder": "Mahoor"
    },
    {
      "name": "3-Dad-(Mahur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/3-Dad-(Mahur).mp3",
      "folder": "Mahoor"
    },
    {
      "name": "4-Chaharmezrab-(Mahur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/4-Chaharmezrab-(Mahur).mp3",
      "folder": "Mahoor"
    },
    {
      "name": "5-Kharazmi-(Mahur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/5-Kharazmi-(Mahur).mp3",
      "folder": "Mahoor"
    },
    {
      "name": "6-Feyli-(Mahur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/6-Feyli-(Mahur).mp3",
      "folder": "Mahoor"
    },
    {
      "name": "7-Shekasteh-(Mahur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/7-Shekasteh-(Mahur).mp3",
      "folder": "Mahoor"
    },
    {
      "name": "8-Delkash-(Mahur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/8-Delkash-(Mahur).mp3",
      "folder": "Mahoor"
    },
    {
      "name": "9-Neyriz-(Mahur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/9-Neyriz-(Mahur).mp3",
      "folder": "Mahoor"
    },
    {
      "name": "1-Moqaddameh-(Nava)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/1-Moqaddameh-(Nava).mp3",
      "folder": "Nava"
    },
    {
      "name": "10-Nahoft-(Nava)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/10-Nahoft-(Nava).mp3",
      "folder": "Nava"
    },
    {
      "name": "11-Hoseyni-(Nava)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/11-Hoseyni-(Nava).mp3",
      "folder": "Nava"
    },
    {
      "name": "12-Oj-o Hazeez-(Nava)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/12-Oj-o Hazeez-(Nava).mp3",
      "folder": "Nava"
    },
    {
      "name": "2-Chaharmezrab-(Nava)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/2-Chaharmezrab-(Nava).mp3",
      "folder": "Nava"
    },
    {
      "name": "3-Daramad-(Nava)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/3-Daramad-(Nava).mp3",
      "folder": "Nava"
    },
    {
      "name": "4-Naghmeh-(Nava)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/4-Naghmeh-(Nava).mp3",
      "folder": "Nava"
    },
    {
      "name": "5-Oshshaq-(Nava)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/5-Oshshaq-(Nava).mp3",
      "folder": "Nava"
    },
    {
      "name": "6-Bayat-e Ajam-(Nava)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/6-Bayat-e Ajam-(Nava).mp3",
      "folder": "Nava"
    },
    {
      "name": "7-Takht-e Taqdis-(Nava)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/7-Takht-e Taqdis-(Nava).mp3",
      "folder": "Nava"
    },
    {
      "name": "8-Rohab-(Nava)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/8-Rohab-(Nava).mp3",
      "folder": "Nava"
    },
    {
      "name": "9-Neyshaburak-(Nava)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/9-Neyshaburak-(Nava).mp3",
      "folder": "Nava"
    },
    {
      "name": "1-Chaharmezrab-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/1-Chaharmezrab-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "10-Zabol-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/10-Zabol-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "11-Muyeh-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/11-Muyeh-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "12-Sepehr-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/12-Sepehr-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "13-Forud-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/13-Forud-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "2-Daramad-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/2-Daramad-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "3-Naghmeh-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/3-Naghmeh-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "4-Khosravani-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/4-Khosravani-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "5-Neyriz-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/5-Neyriz-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "6-Panjgah-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/6-Panjgah-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "7-Bayate Ajam-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/7-Bayate Ajam-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "8-Shekasteh-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/8-Shekasteh-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "9-Zanguleh-(Rast-Panjgah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/9-Zanguleh-(Rast-Panjgah).mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "1-Moqaddameh-(Segah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/1-Moqaddameh-(Segah).mp3",
      "folder": "Segah"
    },
    {
      "name": "10-Masnavi-e Mokhalef-(Segah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/10-Masnavi-e Mokhalef-(Segah).mp3",
      "folder": "Segah"
    },
    {
      "name": "11-Maghlub-(Segah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/11-Maghlub-(Segah).mp3",
      "folder": "Segah"
    },
    {
      "name": "12-Zang-e Shotor-(Segah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/12-Zang-e Shotor-(Segah).mp3",
      "folder": "Segah"
    },
    {
      "name": "2-Chaharmezrab-(Segah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/2-Chaharmezrab-(Segah).mp3",
      "folder": "Segah"
    },
    {
      "name": "3-Daramad-(Segah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/3-Daramad-(Segah).mp3",
      "folder": "Segah"
    },
    {
      "name": "4-Mardafkan-(Segah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/4-Mardafkan-(Segah).mp3",
      "folder": "Segah"
    },
    {
      "name": "5-Muyeh-(Segah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/5-Muyeh-(Segah).mp3",
      "folder": "Segah"
    },
    {
      "name": "6-Zabol-(Segah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/6-Zabol-(Segah).mp3",
      "folder": "Segah"
    },
    {
      "name": "7-Chaharmezrab-e Zabol-(Segah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/7-Chaharmezrab-e Zabol-(Segah).mp3",
      "folder": "Segah"
    },
    {
      "name": "8-Basteh Negar-(Segah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/8-Basteh Negar-(Segah).mp3",
      "folder": "Segah"
    },
    {
      "name": "9-Mokhalef-(Segah)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/9-Mokhalef-(Segah).mp3",
      "folder": "Segah"
    },
    {
      "name": "1-Daramad-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/1-Daramad-(Shur).mp3",
      "folder": "Shoor"
    },
    {
      "name": "10-Ozzal-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/10-Ozzal-(Shur).mp3",
      "folder": "Shoor"
    },
    {
      "name": "11-Gereyli-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/11-Gereyli-(Shur).mp3",
      "folder": "Shoor"
    },
    {
      "name": "12-Shahnaz-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/12-Shahnaz-(Shur).mp3",
      "folder": "Shoor"
    },
    {
      "name": "13-Kord-e Bayat-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/13-Kord-e Bayat-(Shur).mp3",
      "folder": "Shoor"
    },
    {
      "name": "2-Chaharmezrab-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/2-Chaharmezrab-(Shur).mp3",
      "folder": "Shoor"
    },
    {
      "name": "3-Rohab-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/3-Rohab-(Shur).mp3",
      "folder": "Shoor"
    },
    {
      "name": "4-Kereshmeh-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/4-Kereshmeh-(Shur).mp3",
      "folder": "Shoor"
    },
    {
      "name": "5-Shahin-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/5-Shahin-(Shur).mp3",
      "folder": "Shoor"
    },
    {
      "name": "6-Razavi-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/6-Razavi-(Shur).mp3",
      "folder": "Shoor"
    },
    {
      "name": "7-Muyeh-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/7-Muyeh-(Shur).mp3",
      "folder": "Shoor"
    },
    {
      "name": "8-Salmak-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/8-Salmak-(Shur).mp3",
      "folder": "Shoor"
    },
    {
      "name": "9-Hoseyni-(Shur)",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/9-Hoseyni-(Shur).mp3",
      "folder": "Shoor"
    }
  ];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

