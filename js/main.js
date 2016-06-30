
    var goodMovie = [],
        rllyGoodMovie = []

        var movie1 = {
            title: 'Apocalypse Now',
            genre: 'Drama',
            year: 1979,
            actors: ['Martin Sheen', 'Marlon Brando', 'Robert Duvall'],
            stars: 8.5
        }
        var movie2 = {
            title: 'Microcosmos',
            genre: 'Documentary',
            year: 1996,
            actors: ['Kristin Scott Thomas', 'Jacques Perrin'],
            stars: 7.9
        }
        var movie3 = {
            title: 'Akira',
            genre: 'Animation',
            year: 1988,
            actors: ['Nozomu Sasaki', 'Mami Koyama', 'Mitsuo Iwata'],
            stars: 8.1
        }
        var movie4 = {
            title: 'Ghost in the Shell',
            genre: 'Animation',
            year: 1995,
            actors: ['Atsuko Tanaka', 'Iemasa Kayumi', 'Akio Otsuka'],
            stars: 8.0
        }
        var movie5 = {
            title: 'Perfect Blue',
            genre: 'Animation',
            year: 1997,
            actors: ['Junko Iwao', 'Rica Matsumoto', 'Shinpachi Tsuji'],
            stars: 7.8
        }

        goodMovie.push(movie1)
        goodMovie.push(movie2)
        goodMovie.push(movie3)
        goodMovie.push(movie4)
        goodMovie.push(movie5)

        console.log(goodMovie)

        goodMovie.sort(function (a, b) {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        })

        goodMovie.sort(function (a, b) {
          if (a.stars > b.stars) {
            return 1;
          }
          if (a.stars < b.stars) {
            return -1;
          }
          return 0;
        })

        // goodMovie = JSON.stringify(goodMovie);
        // console.log(goodMovie);

        // title
        // [{"title":"Akira","genre":"Animation","year":1988,"actors":["Nozomu Sasaki","Mami Koyama","Mitsuo Iwata"],"stars":8.1},{"title":"Apocalypse Now","genre":"Drama","year":1979,"actors":["Martin Sheen","Marlon Brando","Robert Duvall"],"stars":8.5},{"title":"Ghost in the Shell","genre":"Animation","year":1995,"actors":["Atsuko Tanaka","Iemasa Kayumi","Akio Otsuka"],"stars":8},{"title":"Microcosmos","genre":"Documentary","year":1996,"actors":["Kristin Scott Thomas","Jacques Perrin"],"stars":7.9},{"title":"Perfect Blue","genre":"Animation","year":1997,"actors":["Junko Iwao","Rica Matsumoto","Shinpachi Tsuji"],"stars":7.8}]

        // stars
        // [{"title":"Perfect Blue","genre":"Animation","year":1997,"actors":["Junko Iwao","Rica Matsumoto","Shinpachi Tsuji"],"stars":7.8},{"title":"Microcosmos","genre":"Documentary","year":1996,"actors":["Kristin Scott Thomas","Jacques Perrin"],"stars":7.9},{"title":"Ghost in the Shell","genre":"Animation","year":1995,"actors":["Atsuko Tanaka","Iemasa Kayumi","Akio Otsuka"],"stars":8},{"title":"Akira","genre":"Animation","year":1988,"actors":["Nozomu Sasaki","Mami Koyama","Mitsuo Iwata"],"stars":8.1},{"title":"Apocalypse Now","genre":"Drama","year":1979,"actors":["Martin Sheen","Marlon Brando","Robert Duvall"],"stars":8.5}]

        var movie6 = {
            title: 'The Scorpion King 2: Rise of a Warrior',
            genre: 'Action',
            year: 2008,
            actors: ['michael Copon', 'Karen David', 'Simon Quarterman'],
            stars: 3.8
        }
        var movie7 = {
            title: 'The Scorpion King 3: Battle for Redemption',
            genre: 'Action',
            year: 2012,
            actors: ['Dave Bautista', 'Bostin Christopher', 'Tanapol Chuksrida'],
            stars: 3.6
        }
        var movie8 = {
            title: 'The Scorpion King 4: Quest for Power',
            genre: 'Action',
            year: 2015,
            actors: ['Victor Webster', 'Ellen Hollman', 'Will Kemp'],
            stars: 4.3
        }

        rllyGoodMovie.push(movie6)
        rllyGoodMovie.push(movie7)
        rllyGoodMovie.push(movie8)

        console.log(rllyGoodMovie)

        rllyGoodMovie.sort(function (a, b) {
          if (a.stars > b.stars) {
            return 1;
          }
          if (a.stars < b.stars) {
            return -1;
          }
          return 0;
        })

        var allMovie = goodMovie.concat(rllyGoodMovie)
        console.log(allMovie)
        // allMovie = JSON.stringify(allMovie)
        // console.log(allMovie)
        //
        // // all
        // // [{"title":"Perfect Blue","genre":"Animation","year":1997,"actors":["Junko Iwao","Rica Matsumoto","Shinpachi Tsuji"],"stars":7.8},{"title":"Microcosmos","genre":"Documentary","year":1996,"actors":["Kristin Scott Thomas","Jacques Perrin"],"stars":7.9},{"title":"Ghost in the Shell","genre":"Animation","year":1995,"actors":["Atsuko Tanaka","Iemasa Kayumi","Akio Otsuka"],"stars":8},{"title":"Akira","genre":"Animation","year":1988,"actors":["Nozomu Sasaki","Mami Koyama","Mitsuo Iwata"],"stars":8.1},{"title":"Apocalypse Now","genre":"Drama","year":1979,"actors":["Martin Sheen","Marlon Brando","Robert Duvall"],"stars":8.5},{"title":"The Scorpion King 3: Battle for Redemption","genre":"Action","year":2012,"actors":["Dave Bautista","Bostin Christopher","Tanapol Chuksrida"],"stars":3.6},{"title":"The Scorpion King 2: Rise of a Warrior","genre":"Action","year":2008,"actors":["michael Copon","Karen David","Simon Quarterman"],"stars":3.8},{"title":"The Scorpion King 4: Quest for Power","genre":"Action","year":2015,"actors":["Victor Webster","Ellen Hollman","Will Kemp"],"stars":4.3}]
