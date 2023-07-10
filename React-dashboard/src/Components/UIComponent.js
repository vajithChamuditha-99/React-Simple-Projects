import React from 'react';
import DetailsComponent from './DetailsComponent';
import HelpfulShortcuts from './HelpfulShortcuts';
import { DetailsData } from '../Data/DetailsData';
import { ShortcutsData } from '../Data/ShortcutsData';

const UIComponent = () => {
  return (
    <div className="UIComponent">
      <div className="detailComponent">
        {DetailsData.map((detail) => {
          return (
            <DetailsComponent
              detailTitle={detail.detailTitle}
              detailData={detail.detailData}
              detailDescreptionHead={detail.detailDescreption.decrepHead}
              detailDescreptionData={detail.detailDescreption.descrepData}
            />
          );
        })}
      </div>
      <div className="helpfulShortcuts">
        <div className="helpfulShortcutsUpper">
          <h5>Helpful Shortcuts</h5>
        </div>
        <div className="helpfulShortcutsBelow">
          {ShortcutsData.map((shortcut) => {
            return (
              <HelpfulShortcuts
                shortcutIcon={shortcut.shortcutIcon}
                shortcutTitle={shortcut.shortcutTitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UIComponent;
