window.onload = function() {






    const sections = document.querySelectorAll('.section');

    const sectionWordLists = [
        [            
            [
                'As', ' an', ' IT', ' student', ',', ' I\'ve', ' picked', ' up', ' a', ' ton', ' of', ' technical', ' skills', ' that', ' come', ' in', ' handy', ' when', ' it', ' comes', ' to', ' troubleshooting', ' and', ' keeping', ' up', ' with', ' technology', ' trends', '.', ' I\'m', ' comfortable', ' using', ' a', ' variety', ' of', ' software', ' applications', ' like', ' Microsoft', ' Office', ',', ' Adobe', ' Creative', ' Suite', ',', ' and', ' digital', ' audio', ' workstations', ' like', ' Pro', ' Tools', ' and', ' Logic', ' Pro', ' X', '.', ' I\'ve', ' also', ' dabbled', ' in', ' programming', ' languages', ' like', ' Java', ' and', ' Python', ',', ' as', ' well', ' as', ' web', ' development', ' tools', ' like', ' HTML', ',', ' CSS', ',', ' and', ' JavaScript', '.'
            ],
            [        
                'I', ' love', ' everything', ' about', ' audio', ' production', ' and', ' have', ' honed', ' my', ' skills', ' over', ' the', ' years', '.', ' From', ' recording', ' and', ' mixing', ',', ' to', ' sound', ' design', ' and', ' post-production', ',', ' I', ' have', ' experience', ' with', ' it', ' all', '.', ' I\'m', ' well-versed', ' in', ' using', ' a', ' variety', ' of', ' audio', ' equipment', ',', ' including', ' microphones', ',', ' audio', ' interfaces', ',', ' and', ' studio', ' monitors', ',', ' and', ' I\'m', ' always', ' eager', ' to', ' try', ' out', ' new', ' plugins', ' and', ' virtual', ' instruments', '.', ' With', ' these', ' skills', ',', ' I', ' can', ' help', ' create', ' high-quality', ' audio', ' that', ' meets', ' my', ' clients\'', ' needs', ' and', ' exceeds', ' their', ' expectations', '.'
            ]
        ],
        [
            [
                'During', ' my', ' six', ' years', ' as', ' a', ' theater', ' technician', ',', ' I', ' gained', ' a', ' wealth', ' of', ' experience', ' in', ' sound', ' design', ',', ' live', ' sound', ',', ' and', ' audio', ' engineering', '.', ' I', ' worked', ' on', ' a', ' variety', ' of', ' productions', ',', ' from', ' plays', ' to', ' musicals', ',', ' and', ' honed', ' my', ' skills', ' in', ' areas', ' such', ' as', ' microphone', ' placement', ',', ' mixing', ',', ' and', ' sound', ' effects', ' creation', '.', ' My', ' work', ' earned', ' me', ' multiple', ' awards', ' for', ' sound', ' design', ',', ' which', ' is', ' a', ' testament', ' to', ' my', ' commitment', ' to', ' quality', ' and', ' attention', ' to', ' detail', '.'
            ],
            [
                'Aside', ' from', ' theater', ',', ' I', ' also', ' have', ' experience', ' in', ' studio', ' engineering', '.', ' I', ' had', ' the', ' opportunity', ' to', ' rebuild', ' and', ' redesign', ' KingdomworK', ' Studio', ',', ' as', ' well', ' as', ' create', ' my', ' own', ' home', ' studio', '.', ' These', ' experiences', ' have', ' allowed', ' me', ' to', ' gain', ' expertise', ' in', ' areas', ' such', ' as', ' acoustic', ' treatment', ',', ' signal', ' flow', ',', ' and', ' equipment', ' selection', '.', ' On', ' top', ' of', ' that', ',', ' my', ' IT', ' degree', ' has', ' also', ' provided', ' me', ' with', ' a', ' broader', ' perspective', ' on', ' the', ' intersection', ' of', ' audio', ' and', ' technology', ',', ' and', ' I\'ve', ' been', ' able', ' to', ' apply', ' that', ' knowledge', ' to', ' my', ' work', ' in', ' audio', ' production', '.', ' Overall', ',', ' my', ' diverse', ' experiences', ' in', ' audio', ' and', ' IT', ' have', ' equipped', ' me', ' with', ' the', ' skills', ' and', ' knowledge', ' to', ' tackle', ' any', ' audio', ' project', ' with', ' confidence', ' and', ' creativity', '.'
            ]
        ],
        [
            [
                'I', ' have', ' a', ' strong', ' educational', ' background', ' in', ' both', ' audio', ' production', ' and', ' information', ' technology', '.', ' I', ' earned', ' my', ' two-year', ' AA', ' degree', ' in', ' Audio', ' Production', ' Technologies', ' from', ' Scottsdale', ' Community', ' College', ',', ' where', ' I', ' gained', ' a', ' solid', ' foundation', ' in', ' areas', ' such', ' as', ' music', ' theory', ',', ' sound', ' design', ',', ' and', ' mixing', '.', ' Currently', ',', ' I', ' am', ' pursuing', ' a', ' Bachelor', ' of', ' Science', ' degree', ' in', ' Information', ' Technology', ' from', ' Arizona', ' State', ' University', ',', ' where', ' I\'ve', ' been', ' able', ' to', ' further', ' expand', ' my', ' knowledge', ' in', ' programming', ',', ' networking', ',', ' and', ' database', ' management', '.', ' The', ' combination', ' of', ' my', ' education', ' and', ' professional', ' experience', ' has', ' allowed', ' me', ' to', ' develop', ' a', ' unique', ' set', ' of', ' skills', ' that', ' make', ' me', ' a', ' versatile', ' and', ' competent', ' audio', ' technician', ' and', ' IT', ' professional', '.'
            ]
        ],
        [
            [        
                'In', ' my', ' free', ' time', ',', ' I', ' have', ' a', ' variety', ' of', ' interests', ' that', ' keep', ' me', ' busy', ' and', ' engaged', '.', ' I', ' have', ' a', ' passion', ' for', ' all', ' things', ' audio', ' and', ' technology', ',', ' which', ' is', ' why', ' I', ' enjoy', ' exploring', ' new', ' software', ',', ' hardware', ',', ' and', ' audio', ' gear', ' in', ' my', ' spare', ' time', '.', ' Additionally', ',', ' I', ' enjoy', ' spending', ' time', ' with', ' friends', ' and', ' family', ',', ' problem-solving', ',', ' and', ' working', ' on', ' my', ' own', ' computer', ' projects', '.', ' I', ' find', ' that', ' tinkering', ' with', ' technology', ' and', ' audio', ' equipment', ' in', ' my', ' free', ' time', ' allows', ' me', ' to', ' stay', ' sharp', ' and', ' continue', ' to', ' develop', ' my', ' skills', '.', ' Finally', ',', ' I', ' also', ' make', ' it', ' a', ' priority', ' to', ' take', ' care', ' of', ' my', ' physical', ' health', ' through', ' regular', ' exercise', ',', ' which', ' I', ' find', ' helps', ' me', ' stay', ' energized', ' and', ' focused', '.'
            ]
        ]
      ];
  
      sections.forEach((section, sIndex) => {
        let timeouts = [];
        const paragraphs = section.querySelectorAll('p');
        const wordLists = sectionWordLists[sIndex];
      
        const animateWords = () => {
          timeouts.forEach(clearTimeout);
          timeouts = [];
          let delay = 0;
          paragraphs.forEach((paragraph, pIndex) => {
            const words = paragraph.querySelectorAll('span');
            const wordList = wordLists[pIndex];
            words.forEach((word, wIndex) => {
              const timeout = setTimeout(() => {
                word.textContent = wordList[wIndex];
                section.style.maxHeight = section.scrollHeight + 'px';
              }, delay + (wIndex * 30));
              timeouts.push(timeout);
            });
            delay += words.length * 30 + 700; // add 300ms delay after each paragraph
          });
        }
      
      const resetWords = () => {
        timeouts.forEach(clearTimeout);
        timeouts = [];
        let delay = 0;
        for (let pIndex = paragraphs.length - 1; pIndex >= 0; pIndex--) {
          const paragraph = paragraphs[pIndex];
          const words = paragraph.querySelectorAll('span');
          for (let wIndex = words.length - 1; wIndex >= 0; wIndex--) {
            const word = words[wIndex];
            const timeout = setTimeout(() => {
              word.textContent = '';
            }, delay + ((words.length - wIndex - 1) * 30));
            timeouts.push(timeout);
          }
          delay += words.length * 30; // add 300ms delay after each paragraph
        }
      }
  
      const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        const vertInView = (rect.top <= windowHeight * 0.80) && ((rect.top + rect.height) >= windowHeight * 0.2);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        return (vertInView && horInView);
      }
  
      animateWords();
  
      window.addEventListener('scroll', () => {
        if (isInViewport(section)) {
          animateWords();
        } else {
          resetWords();
        }
      });
    });





    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    })
    
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }))





  }