import toAbsoluteGlob from "to-absolute-glob"
import { IGNORE_PATTERNS_DEFAULT } from "./constants"
import { getProjectRoot } from "../get-project-root"

export const getIgnorePatterns = () => IGNORE_PATTERNS_DEFAULT.map(pattern => toAbsoluteGlob(`**/${pattern}`, { cwd: getProjectRoot() }))
