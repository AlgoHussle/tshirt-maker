/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader} from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimationl } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab} from '../components'


const customizer = () => {
  return (
    <></>
  )
}

export default customizer