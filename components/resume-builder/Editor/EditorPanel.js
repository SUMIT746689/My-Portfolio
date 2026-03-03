'use client';

import { useTranslations } from '../../../hooks/useTranslations';
import SortableSectionList from './SortableSectionList';
import SortableSectionItem from './SortableSectionItem';
import ContactEditor from './sections/ContactEditor';
import SummaryEditor from './sections/SummaryEditor';
import ExperienceEditor from './sections/ExperienceEditor';
import ProjectsEditor from './sections/ProjectsEditor';
import SkillsEditor from './sections/SkillsEditor';
import EducationEditor from './sections/EducationEditor';
import InterestsEditor from './sections/InterestsEditor';
import PhotoEditor from './sections/PhotoEditor';

const sectionComponents = {
  contact: (props) => (
    <ContactEditor
      contact={props.resume.contact}
      updateContact={props.updateContact}
    />
  ),
  summary: (props) => (
    <SummaryEditor
      summary={props.resume.summary}
      updateSummary={props.updateSummary}
    />
  ),
  experience: (props) => (
    <ExperienceEditor
      experience={props.resume.experience}
      addItem={props.addItem}
      updateItem={props.updateItem}
      removeItem={props.removeItem}
    />
  ),
  projects: (props) => (
    <ProjectsEditor
      projects={props.resume.projects}
      addItem={props.addItem}
      updateItem={props.updateItem}
      removeItem={props.removeItem}
    />
  ),
  skills: (props) => (
    <SkillsEditor
      skills={props.resume.skills}
      addItem={props.addItem}
      updateItem={props.updateItem}
      removeItem={props.removeItem}
    />
  ),
  education: (props) => (
    <EducationEditor
      education={props.resume.education}
      addItem={props.addItem}
      updateItem={props.updateItem}
      removeItem={props.removeItem}
    />
  ),
  interests: (props) => (
    <InterestsEditor
      interests={props.resume.interests}
      addItem={props.addItem}
      updateItem={props.updateItem}
      removeItem={props.removeItem}
    />
  ),
};

const sectionTitleKeys = {
  contact: 'resumeBuilder.sections.contact',
  summary: 'resumeBuilder.sections.summary',
  experience: 'resumeBuilder.sections.experience',
  projects: 'resumeBuilder.sections.projects',
  skills: 'resumeBuilder.sections.skills',
  education: 'resumeBuilder.sections.education',
  interests: 'resumeBuilder.sections.interests',
};

export default function EditorPanel(props) {
  const { t } = useTranslations();
  const { resume, setSectionOrder, updatePhoto } = props;

  return (
    <div className="space-y-3">
      {/* Photo editor card */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow duration-200 p-4">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400" />
          {t('resumeBuilder.sections.photo')}
        </h3>
        <PhotoEditor photo={resume.photo} updatePhoto={updatePhoto} />
      </div>

      {/* Drag hint */}
      <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center py-1">
        {t('resumeBuilder.dragHint')}
      </p>

      {/* Sortable sections */}
      <SortableSectionList
        sectionOrder={resume.sectionOrder}
        setSectionOrder={setSectionOrder}
      >
        {resume.sectionOrder.map((sectionId) => (
          <SortableSectionItem
            key={sectionId}
            id={sectionId}
            title={t(sectionTitleKeys[sectionId])}
          >
            {sectionComponents[sectionId]?.(props)}
          </SortableSectionItem>
        ))}
      </SortableSectionList>
    </div>
  );
}
