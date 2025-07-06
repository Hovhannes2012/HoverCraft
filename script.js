$(document).ready(function () {
    var currentSlide = 0;

    function showSlide(index) {
        const newTransformValue = -index * 100 + '%';
        $(".slides").css("transform", "translateX(" + newTransformValue + ")");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % $(".slide").length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 7000)

    //.............................................................................................................................


    $(document).on('click', '#GTA5', function () {
        $("#gameimg").attr(
            "src",
            "https://i.ebayimg.com/images/g/gXoAAOSwgn1dWpwt/s-l1200.jpg"
        );
        $("#gamename").text('GTA 5')
        $("#gamedesc").text("Grand Theft Auto V, commonly known as GTA 5, is an open-world action-adventure video game developed by Rockstar North and published by Rockstar Games. It was first released in 2013 for PlayStation 3 and Xbox 360, and later adapted for PlayStation 4, Xbox One, PC, and next-gen consoles like PlayStation 5 and Xbox Series X|S. The game is set in the fictional state of San Andreas, which is based on Southern California, and primarily in the city of Los Santos, a satirical version of Los Angeles. GTA 5 features a massive open world filled with diverse environments such as cities, deserts, mountains, oceans, and rural areas. One of the unique aspects of the game is its three-protagonist structure. Players can switch between Michael De Santa, a retired bank robber; Franklin Clinton, a young street hustler; and Trevor Philips, a violent and unpredictable criminal. Each character has a unique storyline, personality, and special abilities that contribute to the game's missions and overall narrative. The main story follows these three characters as they commit a series of increasingly dangerous heists while dealing with both criminal underworlds and government forces. The gameplay combines driving, shooting, stealth, exploration, and role-playing elements. Players can take part in missions to progress the story or freely explore the world to engage in side activities such as racing, flying aircraft, scuba diving, investing in the stock market, playing sports, or customizing vehicles and weapons. GTA 5 also includes an online multiplayer component called Grand Theft Auto Online, which allows players to create their own characters, join crews, complete missions with friends, buy properties, engage in PvP combat, and participate in regular events and updates. With its immersive world, deep storytelling, satirical humor, impressive graphics, and massive freedom of choice, GTA 5 continues to be a landmark in video game history and remains popular among millions of players worldwide.36")
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/24-1-79887.html"
        )
    })
    $(document).on('click', '#asasin', function () {
        $("#gameimg").attr(
            "src",
            "https://i.ebayimg.com/images/g/-e8AAOSwa01kUsjS/s-l400.jpg"
        );
        $("#gamename").text("Assassin's Creed Series")
        $("#gamedesc").text("The Assassin’s Creed series is a popular and long-running action-adventure video game franchise developed and published by Ubisoft. First launched in 2007, the series is known for its unique blend of historical fiction, stealth-based gameplay, parkour movement, and open-world exploration. The central theme of the series revolves around the centuries-old conflict between two secret societies: the Assassins, who fight for peace and freedom, and the Templars, who seek to impose order and control. The games are set in various historical time periods and locations across the world, including the Third Crusade in the Holy Land, the Italian Renaissance, the American Revolution, Ancient Egypt, Ancient Greece, Viking-era England, and more. Players typically take on the role of an Assassin through a modern-day character who uses a device called the Animus to relive their ancestors’ memories. Each game combines real-world historical events, figures, and settings with fictional elements, creating a deep and immersive narrative experience. Gameplay usually involves climbing and parkour across buildings, stealthily taking out enemies, engaging in melee combat, and using a wide variety of historical weapons and tools. Over time, the series evolved from linear mission design to large, fully open worlds with RPG mechanics such as leveling, dialogue choices, gear upgrades, and character customization. Notable entries include Assassin’s Creed II, which introduced Ezio Auditore and became a fan favorite, Assassin’s Creed IV: Black Flag with its naval exploration and pirate setting, and more recent RPG-styled titles like Assassin’s Creed Origins, Odyssey, and Valhalla. In addition to games, the franchise has expanded into books, comics, and even a live-action film. Assassin’s Creed is celebrated for its detailed historical accuracy, compelling storytelling, and the freedom it gives players to explore vast, beautifully crafted worlds. With each new entry, Ubisoft continues to refine the gameplay and explore new historical eras, making Assassin’s Creed one of the most iconic and successful game series of all time.")
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/index.php?do=search"
        )
    })
    $(document).on('click', '#GTA4', function () {
        $("#gameimg").attr(
            "src",
            "https://m.media-amazon.com/images/I/71wbMK6EHWL._AC_UF1000,1000_QL80_.jpg"
        );
        $("#gamename").text("Grand Theft Auto 4")
        $("#gamedesc").text("Grand Theft Auto IV, commonly known as GTA 4, is an open-world action-adventure video game developed by Rockstar North and published by Rockstar Games. It was released in April 2008 for PlayStation 3, Xbox 360, and later for Microsoft Windows. Set in a fictional version of New York City called Liberty City, the game follows the story of Niko Bellic, an Eastern European immigrant who comes to America in search of the American Dream and to escape his dark past. However, he quickly finds himself dragged into a violent criminal underworld filled with gangs, corrupt officials, and betrayal. GTA 4 features a highly detailed and realistic open world, with a gritty, cinematic tone that marked a major shift in the series’ style. The game introduced the RAGE engine and Euphoria physics system, which allowed for more lifelike animations, driving, and combat. Players can explore the massive city, complete story missions, engage in side activities like bowling, darts, and internet dating, or simply cause chaos in the streets. The game’s narrative is deep and emotional, focusing on themes like loyalty, revenge, and the cost of violence. It also offers player choices in key missions, which can affect the story’s outcome. GTA 4 received widespread critical acclaim for its storytelling, world design, character development, and technological achievements. It also includes an online multiplayer mode where players can compete or cooperate in various game types across the city. Two major expansion packs, The Lost and Damned and The Ballad of Gay Tony, were released later, each introducing new characters, missions, and perspectives that connect with the main storyline. With its darker tone, realistic world, and memorable protagonist, Grand Theft Auto IV is considered one of the most important entries in the GTA series and remains a landmark in modern video game history.")
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/44-44-gta-4.html"
        )
    })
    $(document).on('click', '#GTAsa', function () {
        $("#gameimg").attr(
            "src",
            "https://m.media-amazon.com/images/M/MV5BOTYzMzg5MGUtNzhlZS00YWMzLTkwY2EtY2I2MjVmZDUzYjYwXkEyXkFqcGc@._V1_.jpg"
        );
        $("#gamename").text("Grand Theft Auto San Andreas")
        $("#gamedesc").text("Five years ago Carl Johnson escaped from the pressures of life in Los Santos, San Andreas — a city tearing itself apart with gang trouble, drugs, and corruption. Where film stars and millionaires do their best to avoid the dealers and gangbangers.Now, it's the early '90s. Carl's got to go home. His mother has been murdered, his family has fallen apart and his childhood friends are all heading toward disaster.On his return to the neighborhood, a couple of corrupt cops frame him for homicide. CJ is forced on a journey that takes him across the entire state of San Andreas, to save his family and to take control of the streets.")
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/46-23-gta-san-andreas.html"
        )
    })
    $(document).on('click', '#thief', function () {
        $("#gameimg").attr(
            "src",
            "https://m.media-amazon.com/images/M/MV5BNjQyMjU5ODAtMzlkZC00NTg1LTgyZDEtOTA4MjcyNGM1YmVkXkEyXkFqcGc@._V1_.jpg"
        );
        $("#gamename").text("Thief")
        $("#gamedesc").text("Set mainly in a first-person perspective within a 3D environment, the main gameplay tactic of the Thief series is to avoid fights, stealthily traverse the environment to complete specific objectives and instead sneak around the enemies or discreetly subdue them, without raising too much noise or suspicion. The Thief games are sometimes described as either a 'first-person sneaker', 'sneak-em-up' or a 'first-person looter' to emphasize this difference. Classification of the game has been slow coming, as three-dimensional stealth games, such as Tom Clancy's Splinter Cell and Assassin's Creed, only became more common years after the first Thief. Another innovation employed extensively by Thief is the careful use of sound effects as an integral part of gameplay. Sound cues not only tell the player of other characters in the vicinity, but also indicate how much noise Garrett makes when moving about an area. Too much noise can alert nearby guards, who will grow suspicious and come looking for intruders. There are a variety of tactics to avoid being heard, however, such as walking gently, steering clear of noisy pavement, or using moss arrows to create a carpet that muffles the sound of footsteps. In a similar vein, using light and dark became one of the most important strategies.")
        $("#rgamehref").attr(
            "href",
            "https://itorrents-igruha.org/774-04-thief-4-repak.html"
        )
    })
    $(document).on('click', '#miredge', function () {
        $("#gameimg").attr(
            "src",
            "https://ih1.redbubble.net/image.223210886.0721/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg"
        );
        $("#gamename").text("Mirrors Edge")
        $("#gamedesc").text("Mirror's Edge is a 2008 action-adventure platform game developed by DICE and published by Electronic Arts. The game was released for PlayStation 3 and Xbox 360 in November 2008, and for Windows in January 2009. Set in a near-future city, it follows the story of Faith Connors, an underground parkour courier who transmits messages while evading government surveillance. To progress through the game, the player must control Faith from a first-person perspective and complete a series of levels that involve performing a sequence of acrobatic maneuvers, including jumping between rooftops, running across walls, and sliding down zip lines.")
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/792-9078089.html"
        )
    })
    $(document).on('click', '#dishorned1', function () {
        $("#gameimg").attr(
            "src",
            "https://m.media-amazon.com/images/M/MV5BYzBkNTg2ODMtNTE3Zi00ODRiLTkxOTQtZjBhNGE1N2FmOGM5XkEyXkFqcGc@._V1_.jpg"
        );
        $("#gamename").text("Dishorned 1")
        $("#gamedesc").text("Dishonored, released in 2012, is a first-person action-adventure game developed by Arkane Studios and published by Bethesda Softworks. Set in the fictional, plague-ridden city of Dunwall, the game follows Royal Protector Corvo Attano, who is framed for the murder of Empress Jessamine Kaldwin. Dishonored features stealth gameplay, supernatural abilities granted by the Outsider, and a chaos system that influences the game's world state and ending.")
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/250-3-1717.html"
        )
    })
    $(document).on('click', '#dishorned2', function () {
        $("#gameimg").attr(
            "src",
            "https://m.media-amazon.com/images/I/719uHt2ynvL.jpg"
        );
        $("#gamename").text("Dishorned 2")
        $("#gamedesc").text("Dishonored 2 is a 2016 first person action-adventure game developed by Arkane Lyon and published by Bethesda Softworks for PlayStation 4, Windows, and Xbox One. It is the sequel to 2012's Dishonored. After Empress Emily Kaldwin is deposed by the witch Delilah Copperspoon, the player may choose between playing as either Emily or her father/Royal Protector Corvo Attano as they attempt to reclaim the throne. Emily and Corvo each employ their own array of supernatural abilities, though the player can opt not to use these abilities at all. Due to the game's nonlinear gameplay, there are a multitude of ways to complete missions, from non-lethal stealth to purposeful violent conflict.")
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/82-3-6821717.html"
        )
    })
    $(document).on('click', '#csgo', function () {
        $("#gameimg").attr(
            "src",
            "https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg"
        );
        $("#gamename").text("Counter Strike 2")
        $("#gamedesc").text('Counter-Strike 2 is a 2023 free-to-play tactical first-person shooter game developed and published by Valve. It is the fifth entry in the Counter-Strike series, developed as an updated version of the previous entry, Counter-Strike: Global Offensive (2012). The game was announced on March 22, 2023, and was released on September 27, 2023, for Windows and Linux, replacing Global Offensive on Steam.Like its predecessor, the game pits two teams, the Counter-Terrorists and the Terrorists, against each other in various objective-based game modes; additional game modes that stray away from this setup are also included. Counter-Strike 2 features major technical improvements over Global Offensive, including a move from the Source game engine to Source 2, improved graphics, and a new sub-tick server architecture. In addition, many maps from Global Offensive were updated to take advantage of the features of Source 2, with some maps receiving complete overhauls.')
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/14786-counter-strike-2-kontr-strayk-2.html"
        )
    })
    $(document).on('click', '#callofduty', function () {
        $("#gameimg").attr(
            "src",
            "https://cdn.europosters.eu/image/1300/149551.jpg"
        );
        $("#gamename").text("Call of Duty")
        $("#gamedesc").text('Call of Duty is a first-person shooter military video game series and media franchise published by Activision, starting in 2003. The games were first developed by Infinity Ward, then by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent, Call of Duty: Black Ops 6, was released on October 25, 2024.[1]The series originally focused on a World War II setting, with Infinity Ward developing Call of Duty (2003) and Call of Duty 2 (2005) and Treyarch developing Call of Duty 3 (2006). Infinity Wards Call of Duty 4: Modern Warfare (2007) introduced a modern setting and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series; a Modern Warfare remastered version released in 2016. Two other entries, Modern Warfare 2 (2009) and Modern Warfare 3 (2011), were made. The sub-series received a reboot with Modern Warfare in 2019, Modern Warfare II in 2022, and Modern Warfare III in 2023. Infinity Ward has also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016).')
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/1620-call-of-duty-bloodlines.html"
        )
    })
    $(document).on('click', '#godofwar', function () {
        $("#gameimg").attr(
            "src",
            "https://m.media-amazon.com/images/M/MV5BNjJiNTFhY2QtNzZkYi00MDNiLWEzNGEtNWE1NzBkOWIxNmY5XkEyXkFqcGc@._V1_.jpg"
        );
        $("#gamename").text("God of War")
        $("#gamedesc").text('God of War is an action-adventure game franchise created by David Jaffe and developed by Sonys Santa Monica Studio. It began in 2005 on the PlayStation 2 (PS2) video game console and has become a flagship series for PlayStation, consisting of nine installments across multiple platforms. Based on ancient mythologies, the series plot follows Kratos, a Spartan warrior who becomes the God of War and comes into conflict with various mythological pantheons. The earlier games in the series are based on Greek mythology and see Kratos follow a path of vengeance against the Olympian gods; the later games are based on Norse mythology and see Kratos on a path of redemption while also introducing his son Atreus as a secondary protagonist, as they come into conflict or interact with various Norse deities and figures')
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/8255-712709012713121.html"
        )
    })
    $(document).on('click', '#farcry', function () {
        $("#gameimg").attr(
            "src",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimF6SlT0VyLyRJDrdkBx84msm1ey8KNgH7g&s"
        );
        $("#gamename").text("Far Cry(5)")
        $("#gamedesc").text("Far Cry is an anthology franchise of first-person shooter games published by Ubisoft. The first game, Far Cry, was developed by Crytek to premiere their CryEngine software, and released in March 2004. Subsequently, Ubisoft obtained the rights to the franchise and the bulk of the development is handled by Ubisoft Montreal with assistance from other Ubisoft satellite studios. The following games in the series have used a Ubisoft-modified version of the CryEngine, the Dunia Engine, allowing for open world gameplay. In the present, the franchise consists of six mainline games, a standalone expansion, and several spin-offs; additionally, the first game, initially developed for Microsoft Windows, saw a number of ports to video game consoles, which changed several elements and are therefore considered standalone releases.")
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/87-130126821717.html"
        )
    })
    $(document).on('click', '#minecraft', function () {
        $("#gameimg").attr(
            "src",
            "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/q/5/c/medium-urbnprnt6096-minecraft-video-game-matte-finish-poster-p-original-imagkcaddwgdtqgh.jpeg?q=90&crop=false"
        );
        $("#gamename").text("Minecraft")
        $("#gamedesc").text("Minecraft is a 2011 sandbox game developed and published by the Swedish video game developer Mojang Studios. Originally created by Markus Notch Persson using the Java programming language, the first public alpha build was released on 17 May 2009. The game was continuously developed from then on, receiving a full release on 18 November 2011. Afterwards, Persson left Mojang and gave Jens Jeb Bergensten control over development. In the years since its release, it has been ported to several platforms, including smartphones, tablets, and various video game consoles. In 2014, Mojang and the Minecraft intellectual property were purchased by Microsoft for US$2.5 billion.")
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/5209-8679689.html"
        )
    })
    $(document).on('click', '#horizon', function () {
        $("#gameimg").attr(
            "src",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvC_0l-LNvaJQ9xFSSaM7Ves4NWRL7EzVsQ&s"
        );
        $("#gamename").text("Forza Horizon 5")
        $("#gamedesc").text("Forza Horizon 5 is a 2021 racing game developed by Playground Games and published by Xbox Game Studios. It is the fifth Forza Horizon title and twelfth main instalment in the Forza series. The game is set in a fictionalised representation of Mexico. It was released on 9 November 2021 for Windows, Xbox One, and Xbox Series X/S. The game was also released for PlayStation 5 on 29 April 2025, the first instance of a mainline Forza game releasing outside of Xbox and PC platforms")
        $("#gamehref").attr(
            "href",
            "https://itorrents-igruha.org/5993-2-forza-horizon-5.html"
        )
    })

    $("#gameimg").attr(
        "src",
        "https://m.media-amazon.com/images/M/MV5BNjQyMjU5ODAtMzlkZC00NTg1LTgyZDEtOTA4MjcyNGM1YmVkXkEyXkFqcGc@._V1_.jpg"
    );
    $("#gamename").text("Thief")
    $("#gamedesc").text("Set mainly in a first-person perspective within a 3D environment, the main gameplay tactic of the Thief series is to avoid fights, stealthily traverse the environment to complete specific objectives and instead sneak around the enemies or discreetly subdue them, without raising too much noise or suspicion. The Thief games are sometimes described as either a 'first-person sneaker', 'sneak-em-up' or a 'first-person looter' to emphasize this difference. Classification of the game has been slow coming, as three-dimensional stealth games, such as Tom Clancy's Splinter Cell and Assassin's Creed, only became more common years after the first Thief. Another innovation employed extensively by Thief is the careful use of sound effects as an integral part of gameplay. Sound cues not only tell the player of other characters in the vicinity, but also indicate how much noise Garrett makes when moving about an area. Too much noise can alert nearby guards, who will grow suspicious and come looking for intruders. There are a variety of tactics to avoid being heard, however, such as walking gently, steering clear of noisy pavement, or using moss arrows to create a carpet that muffles the sound of footsteps. In a similar vein, using light and dark became one of the most important strategies.")
    $("#rgamehref").attr(
        "href",
        "https://itorrents-igruha.org/774-04-thief-4-repak.html"
    )

    $.ajax({
        url: "pc.json",
        method: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
            const pcgames = data.pcgames;
            console.log(pcgames);

            const game = pcgames.map((game) => {
                if (game) {
                    $('.pc').append(`
                        <div class="wsx">
                            <img src="${game.img}" class="imgasd"></img>
                            <span class="spanasd">${game.tittle}</span>
                        </div>
            `)
                }
            })
        },
        error: function () {
            console.log("!Error, data was not found!")
        }
    })

    $.ajax({
        url: "xboxpsplatform.json",
        method: "GET",
        dataType: "json",
        success: function (data2) {
            console.log(data2);
            const playstation = data2.playstation;
            console.log(playstation);

            const game2 = playstation.map((game2) => {
                if (game2) {
                    $('.xbox').append(`
                        <div class="wsx">
                            <img src="${game2.img}" class="imgasd"></img>
                            <span class="spanasd">${game2.tittle}</span>
                        </div>
            `)
                }
            })
        },
        error: function () {
            console.log("!Error, data was not found!")
        }
    })
    $.ajax({
        url: "phone.json",
        method: "GET",
        dataType: "json",
        success: function (data3) {
            console.log(data3);
            const phoneplatform = data3.phoneplatform;
            console.log(phoneplatform);

            const game3 = phoneplatform.map((game3) => {
                if (game3) {
                    $('.smartphone').append(`
                        <div class="wsx">
                            <img src="${game3.img}" class="imgasd"></img>
                            <span class="spanasd">${game3.tittle}</span>
                        </div>
            `)
                }
            })
        },
        error: function () {
            console.log("!Error, data was not found!")
        }
    })

    $(document).on("click", ".chevron1", function () {
        const isRotated = $(this).hasClass("rotated");

        if (isRotated) {
            $(this).css("transform", "rotate(0deg)");
            $(".unity").css("height", "90px");
        } else {
            $(this).css("transform", "rotate(90deg)");
            $(".unity").css("height", "auto");
        }

        $(this).toggleClass("rotated");
    });
    $(document).on("click", ".chevron2", function () {
        const isRotated = $(this).hasClass("rotated");

        if (isRotated) {
            $(this).css("transform", "rotate(0deg)");
            $(".unreal").css("height", "90px");
        } else {
            $(this).css("transform", "rotate(90deg)");
            $(".unreal").css("height", "auto");
        }

        $(this).toggleClass("rotated");
    });
    $(document).on("click", ".chevron3", function () {
        const isRotated = $(this).hasClass("rotated");

        if (isRotated) {
            $(this).css("transform", "rotate(0deg)");
            $(".godot").css("height", "90px");
        } else {
            $(this).css("transform", "rotate(90deg)");
            $(".godot").css("height", "auto");
        }

        $(this).toggleClass("rotated");
    });
    $(document).on("click", ".chevron4", function () {
        const isRotated = $(this).hasClass("rotated");

        if (isRotated) {
            $(this).css("transform", "rotate(0deg)");
            $(".cry").css("height", "90px");
        } else {
            $(this).css("transform", "rotate(90deg)");
            $(".cry").css("height", "auto");
        }

        $(this).toggleClass("rotated");
    });

    $("#hehehe").click(function () {
        $(".search").toggleClass("active")
    })

    const carousel = document.getElementById('carousel');
    const buttons = carousel.querySelectorAll('button');

    function updateActive() {
        const center = carousel.scrollLeft + carousel.offsetWidth / 2;
        let closest = null;
        let closestDistance = Infinity;

        buttons.forEach(btn => {
            const rect = btn.getBoundingClientRect();
            const btnCenter = rect.left + rect.width / 2;
            const distance = Math.abs(center - (carousel.scrollLeft + btnCenter));
            if (distance < closestDistance) {
                closestDistance = distance;
                closest = btn;
            }
        });


    }

    carousel.addEventListener('scroll', () => {
        requestAnimationFrame(updateActive);
    });

    window.addEventListener('load', updateActive);

    if ($(window).width() <= 644) {
        $("#1").attr(
            "src",
            "./assets/Desktop6.png"
        );
        $("#2").attr(
            "src",
            "./assets/Desktop7.png"
        );
        $("#3").attr(
            "src",
            "./assets/Desktop8.png"
        );
    }




})

