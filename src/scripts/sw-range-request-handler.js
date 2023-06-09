// Add Range Request support to fetching videos from cache
workbox.routing.registerRoute(
    /.*\.mp4/,
    new workbox.strategies.CacheFirst({
      plugins: [
        new workbox.cacheableResponse.Plugin({statuses: [200]}),
        new workbox.rangeRequests.Plugin(),
      ],
    }),
    'GET'
  );


//  UPDATE for v.5 of Workbox
//  ------
// workbox.routing.registerRoute(
//     /.*\.mp4/,
//     new workbox.strategies.CacheFirst({
//       plugins: [
//         new workbox.cacheableResponse.CacheableResponsePlugin({
//           statuses: [200],
//         }),
//         new workbox.rangeRequests.RangeRequestsPlugin(),
//       ],
//     }),
//     'GET'
//   );