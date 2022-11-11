// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Завантаження скриптів
 */
//? Створіть функцію loadScript(url), яка буде створювати та додавати скрипт на сторінку
// const loadScript = (url, onSuccess, onError) => {
//   const script = document.createElement('script');

//   script.src = url;

//   document.body.append(script);

//   script.addEventListener('load', () => {
//     onSuccess(url);
//   });

//   script.addEventListener('error', () => {
//     onError(url);
//   });
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   url => {
//     console.log(`${url} завантажився успішно!`);

//     loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//       url => {
//         console.log(`${url} завантажився успішно!`);

//         loadScript(
//           'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//           url => {
//             console.log(`${url} завантажився успішно!`);
//           },
//           url => {
//             console.log(`${url} не завантажився!`);
//           }
//         );
//       },
//       url => {
//         console.log(`${url} не завантажився!`);
//       }
//     );
//   },
//   url => {
//     console.log(`${url} не завантажився!`);
//   }
// );

//? Передайте кобэк, який буде викликатися по завершеню завантаженя скрипта

//? Опрацюйте помилки

//? Завантаженя декількох скриптів

//? Пекельна піраміда колбеків

//? Рішення через проміси
const loadScript = url => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = url;

    document.body.append(script);

    script.addEventListener('load', () => {
      resolve(url);
    });

    script.addEventListener('error', () => {
      reject(url);
    });
  });
};

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js').then(
  url => {
    console.log(`${url} завантажився успішно!`);

    loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
    )
      .then(url => {
        console.log(`${url} завантажився успішно!`);

        return loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
        );
      })
      .then(url => {
        console.log(`${url} завантажився успішно!`);
      })
      .catch(url => {
        console.log(`${url}не завантажився!`);
      });
  },
  url => {
    console.log(`${url} не завантажився!`);

    loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
    )
      .then(url => {
        console.log(`${url} завантажився успішно!`);

        return loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
        );
      })
      .then(url => {
        console.log(`${url} завантажився успішно!`);
      })
      .catch(url => {
        console.log(`${url}не завантажився!`);
      });
  }
);
// .then(url => {
//   console.log(`${url} завантажився успішно!`);

//   return loadScript(
//     'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
//   );
// })
// .then(url => {
//   console.log(`${url} завантажився успішно!`);
// })
// .catch(url => {
//   console.log(`${url} не завантажився!`);
// });
