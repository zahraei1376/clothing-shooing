import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import '../../sassStyle/components/directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';


const Directory = ({ sections }) => (
    <div className='directory_menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);