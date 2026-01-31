import google_shankar_cover from '../assets/google_shankar_cover.png';
import shankarProj1 from '../assets/shankarproj1.png';
import shankarProj2 from '../assets/shankarproj2.png';
import shankarProj3 from '../assets/shankarproj3.png';
import shankarProj4 from '../assets/shankarproj4.png';

import click_cover from '../assets/click_cover.png';
import clickProj1 from '../assets/clickproj1.jpg';
import clickProj2 from '../assets/clickproj2.jpg';
import clickProj3 from '../assets/clickproj3.jpg';
import clickProj4 from '../assets/clickproj4.jpg';

import tantparkour_cover from '../assets/tantparkour_cover.png';
import google_collier_cover from '../assets/google_collier_cover.png';
import velosonics_cover from '../assets/velosonics_cover.png';
import internet_save_cover from '../assets/internet_save_cover.png';
import microframes_cover from '../assets/microframes_cover.png';

export const imageMap = {
  // Project Selection / Banners
  'google_shankar_cover': google_shankar_cover,
  'click_cover': click_cover,
  'tantparkour_cover': tantparkour_cover,
  'google_collier_cover': google_collier_cover,
  'velosonics_cover': velosonics_cover,
  'internet_save_cover': internet_save_cover,
  'microframes_cover': microframes_cover,


  // Gallery Images - Shankar
  'shankarproj1': shankarProj1,
  'shankarproj2': shankarProj2,
  'shankarproj3': shankarProj3,
  'shankarproj4': shankarProj4,

  // Gallery Images - Click
  'clickproj1': clickProj1,
  'clickproj2': clickProj2,
  'clickproj3': clickProj3,
  'clickproj4': clickProj4
};

export const getImage = (id) => {
  if (!id) return null;
  return imageMap[id] || null;
};
