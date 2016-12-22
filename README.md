# Electrode.io demo app

- store locale strings in `/config/locales/<locale>.json`
- redirect root `/` to the localized home URL according to the default browser language.
- localized URL loads the right locale file.
- changing language will reload the current page with a call to the server. We do this since it has to load the local strings for the new languange.
