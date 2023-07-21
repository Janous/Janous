/*
 * Custom function used to generate the output of the theme variables
 */

var generateThemeVariables = function(params) {
   let fontParams = {
       'system-ui': {
          name: 'SystemUI',
          family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
       },
       andadapro: {
         name: 'Andada Pro',
         family: '\'Andada Pro\', serif',
         weight: '400 840'
       },
       antonio: {
        name: 'Antonio',
        family: '\'Antonio\', sans-serif',
        weight: '100 700'
      },
       archivonarrow: {
         name: 'Archivo Narrow',
         family: '\'Archivo Narrow\', sans-serif',
         weight: '400 700'
       },
       asap: {
        name: 'Asap',
        family: '\'Asap\', sans-serif',
        weight: '400 700'
      },
       besley: {
         name: 'Besley',
         family: '\'Besley\', serif',
         weight: '400 900'
       },
       bigshouldersdisplay: {
        name: 'Big Shoulders Display',
        family: '\'Big Shoulders Display\', cursive',
        weight: '100 900'
      },
       bitter: {
         name: 'Bitter',
         family: '\'Bitter\', serif',
         weight: '100 900'
       },
       brygada1918: {
         name: 'Brygada 1918',
         family: '\'Brygada 1918\', serif',
         weight: '400 700'
       },
       cairo: {
         name: 'Cairo',
         family: '\'Cairo\', sans-serif',
         weight: '200 1000'
       },
       comfortaa: {
        name: 'Comfortaa',
        family: '\'Comfortaa\', cursive',
        weight: '300 700'
       },
       dancingscript: {
        name: 'Dancing Script',
        family: '\'Dancing Script\', cursive',
        weight: '400 700'
       },
       domine: {
         name: 'Domine',
         family: '\'Domine\', serif',
         weight: '400 700'
       },
       dosis: {
         name: 'Dosis',
         family: '\'Dosis\', sans-serif',
         weight: '200 800'
       },
       exo: {
        name: 'Exo',
        family: '\'Exo\', sans-serif',
        weight: '100 900'
       },
       faustina: {
         name: 'Faustina',
         family: '\'Faustina\', serif',
         weight: '300 800'
       },
       glory: {
        name: 'Glory',
        family: '\'Glory\', sans-serif',
        weight: '100 800'
       },
       gluten: {
        name: 'Gluten',
        family: '\'Gluten\', cursive',
        weight: '100 900'
       },
       heebo: {
        name: 'Heebo',
        family: '\'Heebo\', sans-serif',
        weight: '100 900'
       },
       jetbrainsmono: {
        name: 'JetBrains Mono',
        family: '\'JetBrains Mono\', monospace',
        weight: '100 800'
       },
       jura: {
        name: 'Jura',
        family: '\'Jura\', sans-serif',
        weight: '300 700'
       },
       karla: {
         name: 'Karla',
         family: '\'Karla\', sans-serif',
         weight: '200 800'
       },
       kreon: {
        name: 'Kreon',
        family: '\'Kreon\', serif',
        weight: '300 700'
       },
       lemonada: {
        name: 'Lemonada',
        family: '\'Lemonada\', cursive',
        weight: '300 700'
      },
       librefranklin: {
        name: 'Libre Franklin',
        family: '\'Libre Franklin\', sans-serif',
        weight: '100 900'
      },
       lora: {
         name: 'Lora',
         family: '\'Lora\', serif',
         weight: '400 700'
       },
       manuale: {
         name: 'Manuale',
         family: '\'Manuale\', serif',
         weight: '300 800'
       },
       manrope: {
         name: 'Manrope',
         family: '\'Manrope\', sans-serif',
         weight: '100 900'
       },
       merriweathersans: {
         name: 'Merriweather Sans',
         family: '\'Merriweather Sans\', sans-serif',
         weight: '300 800'
       },
       montserrat: {
         name: 'Montserrat',
         family: '\'Montserrat\', sans-serif',
         weight: '100 900'
       },      
       nunito: {
         name: 'Nunito',
         family: '\'Nunito\', sans-serif',
         weight: '200 1000'
       },
       oswald: {
        name: 'Oswald',
        family: '\'Oswald\', sans-serif',
        weight: '200 700'
      },
       petrona: {
         name: 'Petrona',
         family: '\'Petrona\', serif',
         weight: '100 900'
       },
       playfairdisplay: {
         name: 'Playfair Display',
         family: '\'Playfair Display\', serif',
         weight: '400 900'
       },
       publicsans: {
        name: 'Public Sans',
        family: '\'Public Sans\', sans-serif',
        weight: '100 900'
       },
       quicksand: {
        name: 'Quicksand',
        family: '\'Quicksand\', sans-serif',
        weight: '300 700'
       },
       raleway: {
         name: 'Raleway',
         family: '\'Raleway\', sans-serif',
         weight: '100 900'
       },
       redhatmono: {
        name: 'Red Hat Mono',
        family: '\'Red Hat Mono\', monospace',
        weight: '300 700'
       },
       robotoslab: {
         name: 'Roboto Slab',
         family: '\'Roboto Slab\', serif',
         weight: '100 900'
       },
       rubik: {
         name: 'Rubik',
         family: '\'Rubik\', sans-serif',
         weight: '300 900'
       },
       ruda: {
        name: 'Ruda',
        family: '\'Ruda\', sans-serif',
        weight: '400 900'
       },
       smoochsans: {
        name: 'Smooch Sans',
        family: '\'Smooch Sans\', sans-serif',
        weight: '100 900'
       },
       sourcecodepro: {
        name: 'Source Code Pro',
        family: '\'Source Code Pro\', monospace',
        weight: '200 900'
       },
       spartan: {
        name: 'Spartan',
        family: '\'Spartan\', sans-serif',
        weight: '100 900'
       },
       urbanist: {
        name: 'Urbanist',
        family: '\'Urbanist\', sans-serif',
        weight: '100 900'
       },
       yanonekaffeesatz: {
         name: 'Yanone Kaffeesatz',
         family: '\'Yanone Kaffeesatz\', sans-serif',
         weight: '200 700'
       }
   };

   let fontBodyName = fontParams[params.fontBody]?.name;
   let fontBodyFamily = fontParams[params.fontBody]?.family;
   let fontBodyWeight  = fontParams[params.fontBody]?.weight;
   
   let fontHeadingsName = fontParams[params.fontHeadings]?.name;
   let fontHeadingsFamily = fontParams[params.fontHeadings]?.family;
   let fontHeadingsWeight = fontParams[params.fontHeadings]?.weight;
  
   if(params.fontMenu === 'system-ui') {
       params.fontMenu = fontParams['system-ui'].family;
   } 
   
   if(params.fontLogo === 'system-ui') {
       params.fontLogo = fontParams['system-ui'].family;
   } 

   let output = '';

      if((params.fontBody !== 'system-ui') && (params.fontBody !== params.fontHeadings)) {
         output += `             
            @font-face {
               font-family: '${fontBodyName}';
               src: url('../dynamic/fonts/${params.fontBody}/${params.fontBody}.woff2') format('woff2 supports variations'),
               url('../dynamic/fonts/${params.fontBody}/${params.fontBody}.woff2') format('woff2-variations');
               font-weight: ${fontBodyWeight};
               font-display: swap;
               font-style: normal;
            }
         `;   
      }

      if(params.fontHeadings !== 'system-ui') {
         output += `             
            @font-face {
               font-family: '${fontHeadingsName}';
               src: url('../dynamic/fonts/${params.fontHeadings}/${params.fontHeadings}.woff2') format('woff2 supports variations'),
               url('../dynamic/fonts/${params.fontHeadings}/${params.fontHeadings}.woff2') format('woff2-variations');
               font-weight: ${fontHeadingsWeight};
               font-display: swap;
               font-style: normal;
            }
         `;   
      }

      output += `
         :root {
            --main-col-width:           ${params.mainWidth}; 
            --sidebar-width:            ${params.sidebarWidth}; 
            --navbar-height:            ${params.navbarHeight};
            --card-small-height:        ${params.cardSmallHeight};
            --card-large-height:        ${params.cardLargeHeight};
            --border-radius:            ${params.roundedLayout}px; 
            --body-font:                ${fontBodyFamily};
            --heading-font:             ${fontHeadingsFamily};
            --logo-font:                ${params.fontLogo};
            --menu-font:                ${params.fontMenu};
            --font-weight-normal:       ${params.fontBodyWeight}; 
            --font-weight-bold:         ${params.fontBoldWeight}; 
            --headings-weight:          ${params.fontHeadignsWeight};
            --headings-transform:       ${params.fontHeadingsTransform};
            --line-height:              ${params.lineHeight}; 
            --white:                    #FFFFFF;
            --black:                    #000000;
            --dark:                     #2C2E35;
            --gray-1:                   #84888E;
            --gray-2:                   #B4B9C1;
            --light:                    #EEF2F8;
            --lighter:                  #F7F7F8;
            --color:                    ${params.primaryColor};  
            --color-rgb:                68,138,255; 
            --text-color:               ${params.textColor}; 
            --headings-color:           ${params.headingColor}; 
            --logo-color: #FFFFFF;
            --link-color:               #2C2E35; 
            --link-hover-color:         ${params.primaryColor}; 
            --border-color-light:       #E1E2E3;
      }  
   `;  

   return output;
}

module.exports = generateThemeVariables;