let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_folder = document.querySelector(".track-folder");
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
      "name": "1-Moqaddameh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/1-Moqaddameh.mp3",
      "folder": "Abuata"
    },
    {
      "name": "2-Zarbi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/2-Zarbi.mp3",
      "folder": "Abuata"
    },
    {
      "name": "3-Chaharmezrab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/3-Chaharmezrab.mp3",
      "folder": "Abuata"
    },
    {
      "name": "4-Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/4-Daramad.mp3",
      "folder": "Abuata"
    },
    {
      "name": "5-Sayakhi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/5-Sayakhi.mp3",
      "folder": "Abuata"
    },
    {
      "name": "6-Yatimak",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/6-Yatimak.mp3",
      "folder": "Abuata"
    },
    {
      "name": "7-Hejaz",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/7-Hejaz.mp3",
      "folder": "Abuata"
    },
    {
      "name": "8-Chaharpareh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/8-Chaharpareh.mp3",
      "folder": "Abuata"
    },
    {
      "name": "9-Gabri",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/9-Gabri.mp3",
      "folder": "Abuata"
    },
    {
      "name": "10-Masihaei",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Abuata/10-Masihaei.mp3",
      "folder": "Abuata"
    },
    {
      "name": "1-Moqaddameh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/1-Moqaddameh.mp3",
      "folder": "Afshari"
    },
    {
      "name": "2-Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/2-Daramad.mp3",
      "folder": "Afshari"
    },
    {
      "name": "3-Chaharmezrab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/3-Chaharmezrab.mp3",
      "folder": "Afshari"
    },
    {
      "name": "4-Jameh-daran",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/4-Jameh-daran.mp3",
      "folder": "Afshari"
    },
    {
      "name": "5-Zarbi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/5-Zarbi.mp3",
      "folder": "Afshari"
    },
    {
      "name": "6-Qaraei",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/6-Qaraei.mp3",
      "folder": "Afshari"
    },
    {
      "name": "7-Araq",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/7-Araq.mp3",
      "folder": "Afshari"
    },
    {
      "name": "8-Rohab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/8-Rohab.mp3",
      "folder": "Afshari"
    },
    {
      "name": "9-Masnavi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Afshari/9-Masnavi.mp3",
      "folder": "Afshari"
    },
    {
      "name": "1-Moqaddameh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Esfahan/1-Moqaddameh.mp3",
      "folder": "Bayat-e-Esfahan"
    },
    {
      "name": "2-Chaharmezrab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Esfahan/2-Chaharmezrab.mp3",
      "folder": "Bayat-e-Esfahan"
    },
    {
      "name": "3-Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Esfahan/3-Daramad.mp3",
      "folder": "Bayat-e-Esfahan"
    },
    {
      "name": "4-Bayat-e Rajeh-o Zarbi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Esfahan/4-Bayat-e Rajeh-o Zarbi.mp3",
      "folder": "Bayat-e-Esfahan"
    },
    {
      "name": "5-Oshshaq",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Esfahan/5-Oshshaq.mp3",
      "folder": "Bayat-e-Esfahan"
    },
    {
      "name": "6-Masnavi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Esfahan/6-Masnavi.mp3",
      "folder": "Bayat-e-Esfahan"
    },
    {
      "name": "1-Moqaddameh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/1-Moqaddameh.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "2-Chaharmezrab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/2-Chaharmezrab.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "3-Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/3-Daramad.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "4-Kereshmeh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/4-Kereshmeh.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "5-Dad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/5-Dad.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "6-Zarbi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/6-Zarbi.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "7-Ruhol-arvah",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/7-Ruhol-arvah.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "8-Mehdi Zarrabi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/8-Mehdi Zarrabi.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "9-Dogah",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/9-Dogah.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "10-Shahabi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/10-Shahabi.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "11-Feyli",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/11-Feyli.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "12-Shekasteh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/12-Shekasteh.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "13-Masnavi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Bayat-e-Tork/13-Masnavi.mp3",
      "folder": "Bayat-e-Tork"
    },
    {
      "name": "1-Chaharmezrab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/1-Chaharmezrab.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "2-Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/2-Daramad.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "3-Naghmeh-Zang-e Shotor",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/3-Naghmeh-Zang-e Shotor.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "4-Mardafkan",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/4-Mardafkan.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "5-Zabol",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/5-Zabol.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "6-Chaharmezrab-e Zabol",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/6-Chaharmezrab-e Zabol.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "7-Basteh Negar",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/7-Basteh Negar.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "8-Hesar",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/8-Hesar.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "9-Mokhalef",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/9-Mokhalef.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "10-Masnavi-e Mokhalef",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/10-Masnavi-e Mokhalef.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "11-Hodi-o Pahlavi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/11-Hodi-o Pahlavi.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "12-Rajaz",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/12-Rajaz.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "13-Mansuri",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/13-Mansuri.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "14-Maghlub",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/14-Maghlub.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "15-Naghmeh Maghlub",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Chahargah/15-Naghmeh Maghlub.mp3",
      "folder": "Chahargah"
    },
    {
      "name": "1-Moqaddameh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/1-Moqaddameh.mp3",
      "folder": "Dashti"
    },
    {
      "name": "2-Zarbi-e Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/2-Zarbi-e Daramad.mp3",
      "folder": "Dashti"
    },
    {
      "name": "3-Chaharmezrab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/3-Chaharmezrab.mp3",
      "folder": "Dashti"
    },
    {
      "name": "4-Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/4-Daramad.mp3",
      "folder": "Dashti"
    },
    {
      "name": "5-Oshshaq",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/5-Oshshaq.mp3",
      "folder": "Dashti"
    },
    {
      "name": "6-Khosrow-o Shirin",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/6-Khosrow-o Shirin.mp3",
      "folder": "Dashti"
    },
    {
      "name": "7-Gilaki",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Dashti/7-Gilaki.mp3",
      "folder": "Dashti"
    },
    {
      "name": "1-Moqaddameh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/1-Moqaddameh.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "2-Chaharmezrab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/2-Chaharmezrab.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "3-Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/3-Daramad.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "4-Naghmeh-Zange-e shotor",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/4-Naghmeh-Zange-e shotor.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "5-Chakavak",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/5-Chakavak.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "6-Bidad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/6-Bidad.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "7-Oshshaq",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/7-Oshshaq.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "8-Neydavud",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/8-Neydavud.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "9-Suz-o Godaz",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/9-Suz-o Godaz.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "10-Abolchap",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/10-Abolchap.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "11-Zanguleh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/11-Zanguleh.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "12-Noruz-e Arab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/12-Noruz-e Arab.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "13-Leyli-o Majnun",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/13-Leyli-o Majnun.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "14-Raz-o Niyaz",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/14-Raz-o Niyaz.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "15-Shushtari",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/15-Shushtari.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "16-Mansuri",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/16-Mansuri.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "17-Bakhtiari",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/17-Bakhtiari.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "18-Zarbi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Homayoun/18-Zarbi.mp3",
      "folder": "Homayoun"
    },
    {
      "name": "1-Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/1-Daramad.mp3",
      "folder": "Mahoor"
    },
    {
      "name": "2-Kereshmeh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/2-Kereshmeh.mp3",
      "folder": "Mahoor"
    },
    {
      "name": "3-Dad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/3-Dad.mp3",
      "folder": "Mahoor"
    },
    {
      "name": "4-Chaharmezrab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/4-Chaharmezrab.mp3",
      "folder": "Mahoor"
    },
    {
      "name": "5-Kharazmi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/5-Kharazmi.mp3",
      "folder": "Mahoor"
    },
    {
      "name": "6-Feyli",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/6-Feyli.mp3",
      "folder": "Mahoor"
    },
    {
      "name": "7-Shekasteh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/7-Shekasteh.mp3",
      "folder": "Mahoor"
    },
    {
      "name": "8-Delkash",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/8-Delkash.mp3",
      "folder": "Mahoor"
    },
    {
      "name": "9-Neyriz",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/9-Neyriz.mp3",
      "folder": "Mahoor"
    },
    {
      "name": "10-Araq",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Mahoor/10-Araq.mp3",
      "folder": "Mahoor"
    },
    {
      "name": "1-Moqaddameh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/1-Moqaddameh.mp3",
      "folder": "Nava"
    },
    {
      "name": "2-Chaharmezrab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/2-Chaharmezrab.mp3",
      "folder": "Nava"
    },
    {
      "name": "3-Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/3-Daramad.mp3",
      "folder": "Nava"
    },
    {
      "name": "4-Naghmeh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/4-Naghmeh.mp3",
      "folder": "Nava"
    },
    {
      "name": "5-Oshshaq",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/5-Oshshaq.mp3",
      "folder": "Nava"
    },
    {
      "name": "6-Bayat-e Ajam",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/6-Bayat-e Ajam.mp3",
      "folder": "Nava"
    },
    {
      "name": "7-Takht-e Taqdis",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/7-Takht-e Taqdis.mp3",
      "folder": "Nava"
    },
    {
      "name": "8-Rohab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/8-Rohab.mp3",
      "folder": "Nava"
    },
    {
      "name": "9-Neyshaburak",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/9-Neyshaburak.mp3",
      "folder": "Nava"
    },
    {
      "name": "10-Nahoft",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/10-Nahoft.mp3",
      "folder": "Nava"
    },
    {
      "name": "11-Hoseyni",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/11-Hoseyni.mp3",
      "folder": "Nava"
    },
    {
      "name": "12-Oj-o Hazeez",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Nava/12-Oj-o Hazeez.mp3",
      "folder": "Nava"
    },
    {
      "name": "1-Chaharmezrab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/1-Chaharmezrab.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "2-Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/2-Daramad.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "3-Naghmeh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/3-Naghmeh.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "4-Khosravani",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/4-Khosravani.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "5-Neyriz",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/5-Neyriz.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "6-Panjgah",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/6-Panjgah.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "7-Bayate Ajam",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/7-Bayate Ajam.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "8-Shekasteh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/8-Shekasteh.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "9-Zanguleh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/9-Zanguleh.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "10-Zabol",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/10-Zabol.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "11-Muyeh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/11-Muyeh.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "12-Sepehr",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/12-Sepehr.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "13-Forud",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Rast-Panjgah/13-Forud.mp3",
      "folder": "Rast-Panjgah"
    },
    {
      "name": "1-Moqaddameh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/1-Moqaddameh.mp3",
      "folder": "Segah"
    },
    {
      "name": "2-Chaharmezrab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/2-Chaharmezrab.mp3",
      "folder": "Segah"
    },
    {
      "name": "3-Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/3-Daramad.mp3",
      "folder": "Segah"
    },
    {
      "name": "4-Mardafkan",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/4-Mardafkan.mp3",
      "folder": "Segah"
    },
    {
      "name": "5-Muyeh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/5-Muyeh.mp3",
      "folder": "Segah"
    },
    {
      "name": "6-Zabol",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/6-Zabol.mp3",
      "folder": "Segah"
    },
    {
      "name": "7-Chaharmezrab-e Zabol",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/7-Chaharmezrab-e Zabol.mp3",
      "folder": "Segah"
    },
    {
      "name": "8-Basteh Negar",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/8-Basteh Negar.mp3",
      "folder": "Segah"
    },
    {
      "name": "9-Mokhalef",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/9-Mokhalef.mp3",
      "folder": "Segah"
    },
    {
      "name": "10-Masnavi-e Mokhalef",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/10-Masnavi-e Mokhalef.mp3",
      "folder": "Segah"
    },
    {
      "name": "11-Maghlub",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/11-Maghlub.mp3",
      "folder": "Segah"
    },
    {
      "name": "12-Zang-e Shotor",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Segah/12-Zang-e Shotor.mp3",
      "folder": "Segah"
    },
    {
      "name": "1-Daramad",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/1-Daramad.mp3",
      "folder": "Shoor"
    },
    {
      "name": "2-Chaharmezrab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/2-Chaharmezrab.mp3",
      "folder": "Shoor"
    },
    {
      "name": "3-Rohab",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/3-Rohab.mp3",
      "folder": "Shoor"
    },
    {
      "name": "4-Kereshmeh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/4-Kereshmeh.mp3",
      "folder": "Shoor"
    },
    {
      "name": "5-Shahin",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/5-Shahin.mp3",
      "folder": "Shoor"
    },
    {
      "name": "6-Razavi",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/6-Razavi.mp3",
      "folder": "Shoor"
    },
    {
      "name": "7-Muyeh",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/7-Muyeh.mp3",
      "folder": "Shoor"
    },
    {
      "name": "8-Salmak",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/8-Salmak.mp3",
      "folder": "Shoor"
    },
    {
      "name": "9-Hoseyni",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/9-Hoseyni.mp3",
      "folder": "Shoor"
    },
    {
      "name": "10-Ozzal",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/10-Ozzal.mp3",
      "folder": "Shoor"
    },
    {
      "name": "11-Gereyli",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/11-Gereyli.mp3",
      "folder": "Shoor"
    },
    {
      "name": "12-Shahnaz",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/12-Shahnaz.mp3",
      "folder": "Shoor"
    },
    {
      "name": "13-Kord-e Bayat",
      "artist": "Bahar Barkhordar",
      "image": "Piano - Barkhordar/piano.png",
      "path": "Piano - Barkhordar/Shoor/13-Kord-e Bayat.mp3",
      "folder": "Shoor"
    }
  ];

  
function random_bg_color() {

  // Get a number between 128 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 128;
  let green = Math.floor(Math.random() * 256) + 128;
  let blue = Math.floor(Math.random() * 256) + 128;

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

  track_art.style.backgroundImage = "url('" + track_list[track_index].image + "')";
  track_name.textContent = track_list[track_index].name;
  track_folder.textContent = track_list[track_index].folder;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "Playing " + (track_index + 1) + " of " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  //random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}


function createScrollableList() {
  const trackListContainer = document.getElementById('trackList');
  const folders = {};

  track_list.forEach((track, index) => {
    if (!folders[track.folder]) {
      folders[track.folder] = true;

      const folderItem = document.createElement('div');
      folderItem.textContent = track.folder;
      folderItem.classList.add('listItem', 'folderName');
      trackListContainer.appendChild(folderItem);
    }

    const trackItem = document.createElement('div');
    const spaces = '\xa0'.repeat(4); //'\xa0'.repeat(track.folder.length); // '\xa0' is a non-breaking space
    trackItem.textContent = `${spaces} ${track.name}`;
    trackItem.classList.add('listItem', 'trackItem');
    trackItem.addEventListener('click', function() {
      track_index = index;
      loadTrack(track_index);
      playTrack();
      highlightTrack(track_index);
    });

    trackListContainer.appendChild(trackItem);
  });
}


function highlightTrack(index) {
  const trackItems = document.querySelectorAll('.trackItem');
  trackItems.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('activeTrack'); // Apply a class to highlight the active track
    } else {
      item.classList.remove('activeTrack'); // Remove the class from other tracks
    }
  });
}



// Call the function to generate the scrollable list
createScrollableList();



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
  highlightTrack(track_index);
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
  highlightTrack(track_index);
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
  highlightTrack(track_index);
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

