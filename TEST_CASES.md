# Test Cases

## Test Categories

1. Performance & Optimization (10 tests)
2. Functionality (5 tests)
3. Responsive Design (3 tests)
4. Accessibility (4 tests)
5. Browser Compatibility (3 tests)
6. User Experience (3 tests)

## 1. Performance & Optimization

### TC-PERF-001: Page Weight Verification

**Objective**: Verify total page size meets lightweight goals  
**Priority**: High

**Test Steps**:
1. Open DevTools > Network tab
2. Load index.html
3. Check size of each resource
4. Sum total transferred bytes

**Expected Result**:
- Total page weight < 30KB (excluding fonts)
- HTML: ~8KB
- CSS: ~9KB
- JavaScript: ~4KB

---

### TC-PERF-002: Font Loading Optimization

**Objective**: Verify font optimization  
**Priority**: High

**Test Steps**:
1. Open DevTools > Network tab
2. Filter by "Font" resources
3. Check font file formats and sizes
4. Verify `display=swap` in CSS link

**Expected Result**:
- Fonts use WOFF2 format
- Only 3 font weights loaded
- `display=swap` parameter present
- Text visible immediately (no FOIT)

---

### TC-PERF-003: HTTP Request Count

**Objective**: Minimize HTTP requests  
**Priority**: High

**Test Steps**:
1. Open DevTools > Network tab
2. Clear cache and reload
3. Count total requests

**Expected Result**:
- Total requests ≤ 5
- No unnecessary third-party requests

---

### TC-PERF-004: Load Time on 3G

**Objective**: Verify load time on slow networks  
**Priority**: Critical

**Test Steps**:
1. Open DevTools > Network tab
2. Set throttling to "Fast 3G"
3. Hard reload (Ctrl+Shift+R)
4. Check load time

**Expected Result**:
- Page load < 3 seconds
- Content visible < 2 seconds

---

### TC-PERF-005: JavaScript Dependencies

**Objective**: Verify zero external dependencies  
**Priority**: Critical

**Test Steps**:
1. Check Network tab for CDN requests
2. Inspect script tags in HTML
3. Verify no framework loading

**Expected Result**:
- No React, jQuery, or other libraries
- Only vanilla JavaScript
- No npm package dependencies

---

### TC-PERF-006: CSS Optimization

**Objective**: Verify CSS efficiency  
**Priority**: Medium

**Test Steps**:
1. Check DevTools > Coverage tab
2. Run coverage analysis on CSS
3. Verify no unused styles

**Expected Result**:
- CSS usage > 80%
- No redundant properties
- Efficient selectors

---

### TC-PERF-007: JavaScript Performance

**Objective**: Verify script execution efficiency  
**Priority**: Medium

**Test Steps**:
1. Open DevTools > Performance tab
2. Record page load
3. Check scripting time

**Expected Result**:
- Scripting time < 500ms
- No long tasks (>50ms)
- Efficient DOM manipulation

---

### TC-PERF-008: Lighthouse Audit

**Objective**: Verify overall performance score  
**Priority**: Critical

**Test Steps**:
1. Open DevTools > Lighthouse
2. Select all categories
3. Choose "Mobile" device
4. Run audit

**Expected Result**:
- Performance score > 90
- Accessibility score > 95
- Best Practices score > 90

---

### TC-PERF-009: Resource Caching

**Objective**: Verify proper caching  
**Priority**: Medium

**Test Steps**:
1. Load page once
2. Reload page
3. Check cached resources in Network tab

**Expected Result**:
- Static resources cached
- Reduced load time on repeat visits

---

### TC-PERF-010: Asset Optimization

**Objective**: Verify unicode emojis used instead of images  
**Priority**: Medium

**Test Steps**:
1. Inspect icons in page
2. Verify no image downloads for icons
3. Check Network tab for image requests

**Expected Result**:
- No icon image files
- Unicode emojis render correctly
- Faster initial load

---

## 2. Functionality

### TC-FUNC-001: Navigation Links

**Objective**: Verify navigation functionality  
**Priority**: High

**Test Steps**:
1. Click each navigation link
2. Verify smooth scroll
3. Check active state changes

**Expected Result**:
- All links work correctly
- Smooth scroll to sections
- Active state updates

---

### TC-FUNC-002: Activity Buttons

**Objective**: Test activity card interactions  
**Priority**: High

**Test Steps**:
1. Click each activity button
2. Verify button animation
3. Check notification display

**Expected Result**:
- Button responds with animation
- Notification appears
- Correct notification message

---

### TC-FUNC-003: Language Switcher

**Objective**: Test bilingual functionality  
**Priority**: High

**Test Steps**:
1. Click language switcher button
2. Verify all text changes
3. Check font switching
4. Toggle back to original language

**Expected Result**:
- Language toggles between English/Nepali
- All text elements update
- Font changes to Noto Sans Devanagari for Nepali
- Button label updates correctly

---

### TC-FUNC-004: Progress Bar

**Objective**: Test progress animation  
**Priority**: Medium

**Test Steps**:
1. Click challenge button
2. Observe progress bar animation
3. Verify progress percentage updates

**Expected Result**:
- Progress animates smoothly
- Percentage text updates
- Animation completes correctly

---

### TC-FUNC-005: Scroll Animations

**Objective**: Test scroll-triggered animations  
**Priority**: Low

**Test Steps**:
1. Scroll down page
2. Observe card animations
3. Verify Intersection Observer works

**Expected Result**:
- Cards fade in when visible
- Animations trigger once
- No animation on scrolled elements

---

## 3. Responsive Design

### TC-RESP-001: Mobile View (< 768px)

**Objective**: Verify mobile layout  
**Priority**: High

**Test Steps**:
1. Resize browser to 375px width
2. Check layout and navigation
3. Test all interactions

**Expected Result**:
- Single column layout
- Navigation hidden or hamburger menu
- All features functional
- Touch-friendly buttons

---

### TC-RESP-002: Tablet View (768px - 1024px)

**Objective**: Verify tablet layout  
**Priority**: Medium

**Test Steps**:
1. Resize to 768px width
2. Check grid layouts
3. Test navigation

**Expected Result**:
- Two-column grid
- Full navigation visible
- Proper spacing maintained

---

### TC-RESP-003: Desktop View (> 1024px)

**Objective**: Verify desktop layout  
**Priority**: High

**Test Steps**:
1. View on desktop resolution (1920px)
2. Check max-width constraint
3. Verify grid layouts

**Expected Result**:
- Content centered with max-width
- Multi-column grids (3-4 columns)
- All features accessible

---

## 4. Accessibility

### TC-ACCESS-001: Keyboard Navigation

**Objective**: Verify keyboard accessibility  
**Priority**: Critical

**Test Steps**:
1. Use Tab key to navigate
2. Use Enter to activate buttons
3. Check focus indicators

**Expected Result**:
- All interactive elements focusable
- Visible focus indicators
- Logical tab order

---

### TC-ACCESS-002: Screen Reader Compatibility

**Objective**: Test with screen reader  
**Priority**: High

**Test Steps**:
1. Enable screen reader (NVDA/JAWS)
2. Navigate through page
3. Verify content announced correctly

**Expected Result**:
- Semantic HTML read correctly
- ARIA labels present
- Logical content flow

---

### TC-ACCESS-003: Color Contrast

**Objective**: Verify WCAG AA compliance  
**Priority**: High

**Test Steps**:
1. Use browser contrast checker
2. Test all text/background combinations
3. Check button states

**Expected Result**:
- Contrast ratio ≥ 4.5:1 for normal text
- Contrast ratio ≥ 3:1 for large text
- All states meet WCAG AA

---

### TC-ACCESS-004: Reduced Motion

**Objective**: Verify prefers-reduced-motion support  
**Priority**: Medium

**Test Steps**:
1. Enable reduced motion in OS settings
2. Reload page
3. Verify animations disabled

**Expected Result**:
- No animations play
- All functionality intact
- Smooth user experience

---

## 5. Browser Compatibility

### TC-BROWSER-001: Cross-Browser Testing

**Objective**: Test on multiple browsers  
**Priority**: Critical

**Test Steps**:
1. Test on Chrome 90+
2. Test on Firefox 88+
3. Test on Safari 14+
4. Test on Edge 90+

**Expected Result**:
- Consistent appearance across browsers
- All features functional
- No console errors

---

### TC-BROWSER-002: Mobile Browsers

**Objective**: Test on mobile browsers  
**Priority**: High

**Test Steps**:
1. Test on iOS Safari
2. Test on Chrome Mobile
3. Test touch interactions

**Expected Result**:
- Responsive layout works
- Touch interactions smooth
- No mobile-specific bugs

---

### TC-BROWSER-003: Legacy Browser Graceful Degradation

**Objective**: Verify fallbacks for older browsers  
**Priority**: Low

**Test Steps**:
1. Test on older browser versions
2. Check basic functionality
3. Verify content accessible

**Expected Result**:
- Basic content accessible
- Core features work
- Graceful degradation

---

## 6. User Experience

### TC-UX-001: First Impression

**Objective**: Evaluate initial page load experience  
**Priority**: Critical

**Test Steps**:
1. Clear cache
2. Load page
3. Observe loading sequence

**Expected Result**:
- Content visible quickly
- No layout shifts
- Smooth initial render

---

### TC-UX-002: Interaction Feedback

**Objective**: Verify visual feedback  
**Priority**: High

**Test Steps**:
1. Hover over interactive elements
2. Click buttons
3. Observe animations

**Expected Result**:
- Hover states clear
- Click feedback immediate
- Animations smooth

---

### TC-UX-003: Error Handling

**Objective**: Test error scenarios  
**Priority**: Medium

**Test Steps**:
1. Disable JavaScript
2. Slow network simulation
3. Check console for errors

**Expected Result**:
- Graceful degradation without JS
- No console errors
- Appropriate fallbacks

---

## Test Summary Template

| Test ID | Category | Status | Notes |
|---------|----------|--------|-------|
| TC-PERF-001 | Performance | - | |
| TC-PERF-002 | Performance | - | |
| TC-FUNC-001 | Functionality | - | |
| ... | ... | ... | |
| **Purpose** | Minimize performance impact of images and media elements |
| **Priority** | High |

**Key Checkpoints:**
- [ ] No GIF usage (replaced with CSS/emojis)
- [ ] No auto-playing media resources
- [ ] Use of Unicode emojis instead of image icons
- [ ] CSS gradients instead of background images
- [ ] No oversized image files
- [ ] All images have proper alt text (if any)

**Test Steps:**
1. Open DevTools > Network tab
2. Filter by "Img" and "Media"
3. Check for any image/video requests
4. Verify emoji rendering (should be native)
5. Inspect background elements (should be CSS)

**Expected Result:**
- ✅ Zero image file requests (icons use emojis)
- ✅ No GIF files loaded
- ✅ No auto-playing media elements
- ✅ All decorative elements use CSS
- ✅ Total media resource weight: 0KB
- ✅ Icons scale properly without quality loss

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 1.4: Resource Reuse During Page Transitions

| **Test ID** | TC-PERF-004 |
|-------------|-------------|
| **Test Item** | Navigation and Resource Efficiency |
| **Purpose** | Avoid unnecessary resource re-downloads when navigating |
| **Priority** | Medium |

**Key Checkpoints:**
- [ ] CSS file loaded once and cached
- [ ] JavaScript file loaded once and cached
- [ ] Font resources cached after first load
- [ ] Browser cache headers properly configured
- [ ] No duplicate resource loading

**Test Steps:**
1. Clear browser cache
2. Load `index.html` (first visit)
3. Note all resource sizes in Network tab
4. Refresh page (F5)
5. Check which resources load from cache

**Expected Result:**
- ✅ First load: All resources download (~30KB total)
- ✅ Second load: Resources serve from disk cache
- ✅ Cache-Control headers present
- ✅ 304 Not Modified responses for cached resources
- ✅ No duplicate downloads of same resource

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 1.5: JavaScript Library Dependencies

| **Test ID** | TC-PERF-005 |
|-------------|-------------|
| **Test Item** | External Dependency Analysis |
| **Purpose** | Ensure no heavy external libraries are loaded |
| **Priority** | Critical |

**Key Checkpoints:**
- [ ] No React library loaded
- [ ] No ReactDOM loaded
- [ ] No React-Router loaded
- [ ] No styled-components loaded
- [ ] No framer-motion loaded
- [ ] No jQuery or similar libraries
- [ ] Only vanilla JavaScript used

**Test Steps:**
1. Open DevTools > Sources tab
2. Check loaded JavaScript files
3. Search for library keywords in console: `typeof React`, `typeof jQuery`
4. Inspect Network tab for CDN requests
5. Review `script.js` source code

**Expected Result:**
- ✅ Only one JavaScript file loaded (script.js)
- ✅ `typeof React === 'undefined'` in console
- ✅ No CDN requests to unpkg, jsdelivr, cdnjs, etc.
- ✅ Total JavaScript size < 5KB
- ✅ All code is vanilla JavaScript

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 1.6: HTTP Request Count

| **Test ID** | TC-PERF-006 |
|-------------|-------------|
| **Test Item** | Network Request Efficiency |
| **Purpose** | Minimize total number of HTTP requests |
| **Priority** | High |

**Key Checkpoints:**
- [ ] Total requests ≤ 5
- [ ] No unnecessary third-party scripts
- [ ] No tracking/analytics scripts (for this demo)
- [ ] All critical resources load in first paint

**Test Steps:**
1. Open DevTools > Network tab
2. Clear network log
3. Load `index.html`
4. Count total number of requests
5. Categorize requests by type

**Expected Result:**
- ✅ Total requests: 4-5 maximum
  - 1 HTML file
  - 1 CSS file
  - 1 JavaScript file
  - 1-2 Font files (Google Fonts)
- ✅ No tracking scripts
- ✅ No unnecessary third-party requests
- ✅ 73% reduction compared to React version (15+ requests)

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 1.7: Page Load Performance

| **Test ID** | TC-PERF-007 |
|-------------|-------------|
| **Test Item** | Load Time on Slow Network |
| **Purpose** | Ensure fast load time on 3G connections |
| **Priority** | Critical |

**Key Checkpoints:**
- [ ] First Contentful Paint (FCP) < 1 second
- [ ] Time to Interactive (TTI) < 2 seconds
- [ ] Largest Contentful Paint (LCP) < 2.5 seconds
- [ ] Total page load < 3 seconds on Fast 3G
- [ ] No render-blocking resources

**Test Steps:**
1. Open DevTools > Network tab
2. Select "Fast 3G" throttling preset
3. Clear cache and hard reload
4. Measure load time in Network tab
5. Run Lighthouse performance audit

**Expected Result:**
- ✅ FCP < 1 second
- ✅ LCP < 2.5 seconds
- ✅ TTI < 2 seconds
- ✅ Total load time < 3 seconds
- ✅ Lighthouse Performance score > 90
- ✅ All Core Web Vitals in "Good" range

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 1.8: CSS Optimization

| **Test ID** | TC-PERF-008 |
|-------------|-------------|
| **Test Item** | CSS Code Efficiency |
| **Purpose** | Ensure CSS is optimized and minimal |
| **Priority** | Medium |

**Key Checkpoints:**
- [ ] No unused CSS rules
- [ ] CSS variables used for theming
- [ ] Efficient selector strategy (class-based)
- [ ] Modern layout techniques (Grid, Flexbox)
- [ ] No inline styles in HTML (except dynamic JS)
- [ ] Media queries optimized

**Test Steps:**
1. Open `styles.css` in code editor
2. Check for CSS variables in `:root`
3. Verify no `!important` overuse
4. Search for inefficient selectors (e.g., `* > div`)
5. Use Chrome Coverage tool to detect unused CSS

**Expected Result:**
- ✅ CSS variables defined for all theme colors
- ✅ All selectors are class-based or semantic
- ✅ No universal selectors except reset
- ✅ CSS coverage > 85% (< 15% unused)
- ✅ Only 2-3 media query breakpoints
- ✅ No redundant or duplicate rules

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 1.9: JavaScript Execution Performance

| **Test ID** | TC-PERF-009 |
|-------------|-------------|
| **Test Item** | JavaScript Efficiency |
| **Purpose** | Ensure JavaScript executes efficiently |
| **Priority** | Medium |

**Key Checkpoints:**
- [ ] No blocking JavaScript execution
- [ ] Event delegation used appropriately
- [ ] Intersection Observer for animations
- [ ] No memory leaks in event listeners
- [ ] Minimal DOM manipulation
- [ ] No long-running tasks blocking main thread

**Test Steps:**
1. Open DevTools > Performance tab
2. Record page load and interactions
3. Check for long tasks (> 50ms)
4. Verify no forced reflows
5. Check Memory tab for leaks

**Expected Result:**
- ✅ No tasks longer than 50ms
- ✅ JavaScript execution time < 200ms
- ✅ Event listeners properly removed when not needed
- ✅ No forced synchronous layouts
- ✅ Smooth 60fps animations
- ✅ Memory usage stable (no leaks)

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 1.10: Lighthouse Audit Score

| **Test ID** | TC-PERF-010 |
|-------------|-------------|
| **Test Item** | Overall Performance Metrics |
| **Purpose** | Validate overall optimization success |
| **Priority** | Critical |

**Key Checkpoints:**
- [ ] Performance score > 90
- [ ] Accessibility score > 95
- [ ] Best Practices score > 90
- [ ] SEO score > 90
- [ ] All Core Web Vitals pass

**Test Steps:**
1. Open Chrome DevTools
2. Navigate to Lighthouse tab
3. Select all categories
4. Choose "Mobile" device
5. Run audit

**Expected Result:**
- ✅ Performance: 90+ (Green)
- ✅ Accessibility: 95+ (Green)
- ✅ Best Practices: 90+ (Green)
- ✅ SEO: 90+ (Green)
- ✅ PWA: N/A (not applicable)

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

## 2️⃣ Functionality Testing

### Test Case 2.1: Header Navigation

| **Test ID** | TC-FUNC-001 |
|-------------|-------------|
| **Test Item** | Navigation Menu Functionality |
| **Purpose** | Verify navigation links work correctly |
| **Priority** | High |

**Test Steps:**
1. Load `index.html`
2. Click each navigation link in header
3. Verify active state changes
4. Check smooth scrolling behavior
5. Test logo click (return to top)

**Expected Result:**
- ✅ All navigation links respond to clicks
- ✅ Active state highlights current section
- ✅ Smooth scroll animation occurs
- ✅ Logo returns to home/top
- ✅ No broken links

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 2.2: Activity Card Interactions

| **Test ID** | TC-FUNC-002 |
|-------------|-------------|
| **Test Item** | Activity Button Functionality |
| **Purpose** | Verify activity cards respond to user interactions |
| **Priority** | High |

**Test Steps:**
1. Hover over each activity card
2. Click "सुरु गर्नुहोस्" button on each card
3. Verify hover animations
4. Check notification display
5. Test button click animations

**Expected Result:**
- ✅ Cards lift on hover (translateY)
- ✅ Buttons show click animation
- ✅ Notification appears on button click
- ✅ Notification displays correct message
- ✅ Notification auto-dismisses after 3 seconds

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 2.3: Progress Bar Animation

| **Test ID** | TC-FUNC-003 |
|-------------|-------------|
| **Test Item** | Progress Bar Functionality |
| **Purpose** | Verify progress bar animates correctly |
| **Priority** | Medium |

**Test Steps:**
1. Load page and observe initial progress animation
2. Click "चुनौती स्वीकार गर्नुहोस्" button
3. Watch progress bar increase
4. Verify percentage text updates
5. Check animation smoothness

**Expected Result:**
- ✅ Progress bar animates from 0% to 60% on load
- ✅ Progress increases to 75% when challenge button clicked
- ✅ Percentage text updates in sync
- ✅ Animation is smooth (no jumping)
- ✅ Progress bar color uses gradient

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 2.4: Stat Counter Animation

| **Test ID** | TC-FUNC-004 |
|-------------|-------------|
| **Test Item** | Statistics Counter Animation |
| **Purpose** | Verify stat cards animate on page load |
| **Priority** | Low |

**Test Steps:**
1. Hard refresh page (Ctrl+Shift+R)
2. Observe stat card numbers
3. Verify counting animation occurs
4. Check all four stat cards
5. Verify final values are correct

**Expected Result:**
- ✅ Numbers count up from 0
- ✅ Animation duration ~1 second
- ✅ Final values match expected (12, 8, 25, 5)
- ✅ All four cards animate
- ✅ Animation is smooth

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 2.5: Scroll-Based Card Animations

| **Test ID** | TC-FUNC-005 |
|-------------|-------------|
| **Test Item** | Intersection Observer Animations |
| **Purpose** | Verify cards fade in when scrolled into view |
| **Priority** | Medium |

**Test Steps:**
1. Load page at top
2. Slowly scroll down
3. Observe stat cards, activity cards, achievement cards
4. Verify fade-in and slide-up animations
5. Scroll back up and down again

**Expected Result:**
- ✅ Cards start with opacity: 0
- ✅ Cards fade in when 10% visible
- ✅ Slide-up animation accompanies fade-in
- ✅ Animation plays once per card
- ✅ No re-animation on subsequent scrolls

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

## 3️⃣ Responsive Design Testing

### Test Case 3.1: Mobile Layout (320px - 480px)

| **Test ID** | TC-RESP-001 |
|-------------|-------------|
| **Test Item** | Mobile Small Device Layout |
| **Purpose** | Verify layout works on small mobile devices |
| **Priority** | High |

**Test Steps:**
1. Open DevTools > Device Toolbar
2. Set device to iPhone SE (375x667)
3. Verify all elements visible
4. Test navigation (should be hidden)
5. Check text readability
6. Verify button sizes (touch-friendly)

**Expected Result:**
- ✅ No horizontal scrolling
- ✅ All content visible and readable
- ✅ Navigation menu hidden
- ✅ Cards stack in single column
- ✅ Touch targets ≥ 44x44 pixels
- ✅ Font sizes readable (≥ 16px body text)

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 3.2: Tablet Layout (768px - 1024px)

| **Test ID** | TC-RESP-002 |
|-------------|-------------|
| **Test Item** | Tablet Device Layout |
| **Purpose** | Verify layout adapts to tablet screens |
| **Priority** | High |

**Test Steps:**
1. Set device to iPad (768x1024)
2. Check navigation visibility
3. Verify grid layouts (2-column for cards)
4. Test portrait and landscape orientations
5. Check touch interactions

**Expected Result:**
- ✅ Navigation visible and functional
- ✅ Cards display in 2 columns
- ✅ Proper spacing maintained
- ✅ Works in both orientations
- ✅ No layout breaking

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 3.3: Desktop Layout (1200px+)

| **Test ID** | TC-RESP-003 |
|-------------|-------------|
| **Test Item** | Large Screen Layout |
| **Purpose** | Verify layout optimized for desktop |
| **Priority** | Medium |

**Test Steps:**
1. View on desktop screen (1920x1080)
2. Verify max-width constraint (1200px)
3. Check grid displays 4 columns
4. Verify content centered
5. Test hover interactions

**Expected Result:**
- ✅ Content max-width: 1200px (centered)
- ✅ Stat cards display 4 columns
- ✅ Activity cards display 2-4 columns
- ✅ Proper white space
- ✅ Hover effects smooth

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

## 4️⃣ Accessibility Testing

### Test Case 4.1: Keyboard Navigation

| **Test ID** | TC-A11Y-001 |
|-------------|-------------|
| **Test Item** | Keyboard Accessibility |
| **Purpose** | Ensure all functionality accessible via keyboard |
| **Priority** | Critical |

**Test Steps:**
1. Use Tab key to navigate through page
2. Verify focus indicators visible
3. Test Enter/Space on buttons
4. Navigate through all interactive elements
5. Check tab order logical

**Expected Result:**
- ✅ All interactive elements keyboard accessible
- ✅ Focus indicators clearly visible
- ✅ Logical tab order (top to bottom)
- ✅ Buttons activate with Enter/Space
- ✅ No keyboard traps

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 4.2: Screen Reader Compatibility

| **Test ID** | TC-A11Y-002 |
|-------------|-------------|
| **Test Item** | Screen Reader Support |
| **Purpose** | Verify content accessible to screen readers |
| **Priority** | High |

**Test Steps:**
1. Enable screen reader (NVDA/JAWS/VoiceOver)
2. Navigate through page
3. Verify all content announced
4. Check ARIA labels present
5. Test image alt text (if any)

**Expected Result:**
- ✅ Semantic HTML properly announced
- ✅ Navigation labeled as "navigation"
- ✅ Buttons have descriptive labels
- ✅ Progress bar has aria-valuenow, aria-valuemin, aria-valuemax
- ✅ All interactive elements identifiable

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 4.3: Color Contrast

| **Test ID** | TC-A11Y-003 |
|-------------|-------------|
| **Test Item** | Color Contrast Ratios |
| **Purpose** | Ensure text readable for users with visual impairments |
| **Priority** | High |

**Test Steps:**
1. Use browser extension (e.g., axe DevTools)
2. Check contrast ratios for all text
3. Verify minimum 4.5:1 for normal text
4. Verify minimum 3:1 for large text (18pt+)
5. Test button states (hover, focus, active)

**Expected Result:**
- ✅ All text meets WCAG AA standards
- ✅ Body text: 4.5:1 minimum
- ✅ Heading text: 3:1 minimum (large text)
- ✅ Button text clearly readable
- ✅ No contrast issues reported

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 4.4: Reduced Motion Support

| **Test ID** | TC-A11Y-004 |
|-------------|-------------|
| **Test Item** | Reduced Motion Preference |
| **Purpose** | Respect user's motion sensitivity preferences |
| **Priority** | Medium |

**Test Steps:**
1. Enable "Reduce Motion" in OS settings
2. Reload page
3. Verify animations disabled
4. Check transitions removed
5. Ensure functionality still works

**Expected Result:**
- ✅ All animations disabled when prefers-reduced-motion active
- ✅ Transitions set to none
- ✅ Page still fully functional
- ✅ No layout shifts
- ✅ Content still accessible

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

## 5️⃣ Browser Compatibility Testing

### Test Case 5.1: Chrome/Edge Compatibility

| **Test ID** | TC-COMP-001 |
|-------------|-------------|
| **Test Item** | Chromium-based Browser Support |
| **Purpose** | Verify compatibility with Chrome and Edge |
| **Priority** | Critical |

**Test Steps:**
1. Open in Chrome (latest version)
2. Open in Edge (latest version)
3. Test all functionality
4. Verify visual consistency
5. Check console for errors

**Expected Result:**
- ✅ No JavaScript errors
- ✅ All features work identically
- ✅ Visual appearance consistent
- ✅ Animations smooth
- ✅ Fonts render correctly

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 5.2: Firefox Compatibility

| **Test ID** | TC-COMP-002 |
|-------------|-------------|
| **Test Item** | Firefox Browser Support |
| **Purpose** | Verify compatibility with Firefox |
| **Priority** | High |

**Test Steps:**
1. Open in Firefox (latest version)
2. Test all functionality
3. Verify CSS Grid/Flexbox rendering
4. Check animations
5. Test Nepali font rendering

**Expected Result:**
- ✅ All features functional
- ✅ Layout renders correctly
- ✅ Gradients display properly
- ✅ Animations work
- ✅ Nepali text renders correctly

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 5.3: Safari Compatibility

| **Test ID** | TC-COMP-003 |
|-------------|-------------|
| **Test Item** | Safari Browser Support |
| **Purpose** | Verify compatibility with Safari (macOS/iOS) |
| **Priority** | High |

**Test Steps:**
1. Open in Safari (desktop or iOS)
2. Test all functionality
3. Verify backdrop-filter support
4. Check font rendering
5. Test touch interactions (iOS)

**Expected Result:**
- ✅ All features functional
- ✅ Backdrop-filter blur works or has fallback
- ✅ Fonts render correctly
- ✅ Touch interactions smooth (iOS)
- ✅ No WebKit-specific issues

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

## 6️⃣ User Experience Testing

### Test Case 6.1: First-Time User Experience

| **Test ID** | TC-UX-001 |
|-------------|-------------|
| **Test Item** | Initial Page Load Experience |
| **Purpose** | Verify positive first impression |
| **Priority** | High |

**Test Steps:**
1. Clear all cache and cookies
2. Load page as first-time visitor
3. Observe loading sequence
4. Check visual hierarchy
5. Verify content readability

**Expected Result:**
- ✅ Content visible within 1 second
- ✅ No layout shift during load
- ✅ Clear visual hierarchy
- ✅ Call-to-action buttons prominent
- ✅ Nepali text renders correctly immediately

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 6.2: Interactive Feedback

| **Test ID** | TC-UX-002 |
|-------------|-------------|
| **Test Item** | User Interaction Feedback |
| **Purpose** | Ensure users receive clear feedback on actions |
| **Priority** | Medium |

**Test Steps:**
1. Click various buttons
2. Hover over interactive elements
3. Check for visual feedback
4. Verify notification system
5. Test progress indicators

**Expected Result:**
- ✅ Hover states clearly visible
- ✅ Click animations provide feedback
- ✅ Notifications appear for actions
- ✅ Progress bar shows task completion
- ✅ Loading states clear (if any)

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

### Test Case 6.3: Nepali Language Display

| **Test ID** | TC-UX-003 |
|-------------|-------------|
| **Test Item** | Nepali Devanagari Text Rendering |
| **Purpose** | Verify correct display of Nepali content |
| **Priority** | Critical |

**Test Steps:**
1. Load page
2. Check all Nepali text for readability
3. Verify font loading (Noto Sans Devanagari)
4. Test on different devices
5. Check for any character rendering issues

**Expected Result:**
- ✅ All Nepali text displays correctly
- ✅ Proper Devanagari font loaded
- ✅ No character overlap or spacing issues
- ✅ Consistent rendering across devices
- ✅ Line height appropriate for Nepali script

**Actual Result:** _[To be filled during testing]_

**Status:** _[Pass/Fail]_

---

## 📊 Summary Test Matrix

| Category | Total Tests | Critical | High | Medium | Low |
|----------|-------------|----------|------|--------|-----|
| **Performance** | 10 | 3 | 5 | 2 | 0 |
| **Functionality** | 5 | 0 | 2 | 2 | 1 |
| **Responsive** | 3 | 0 | 2 | 1 | 0 |
| **Accessibility** | 4 | 1 | 2 | 1 | 0 |
| **Compatibility** | 3 | 1 | 2 | 0 | 0 |
| **User Experience** | 3 | 1 | 1 | 1 | 0 |
| **TOTAL** | **28** | **6** | **14** | **7** | **1** |

---

## 🎯 Acceptance Criteria

For the lightweight web content to be considered successful, the following criteria must be met:

### **Must Pass (Critical):**
- ✅ TC-PERF-005: No heavy JavaScript libraries
- ✅ TC-PERF-007: Load time < 3 seconds on Fast 3G
- ✅ TC-PERF-010: Lighthouse Performance score > 90
- ✅ TC-A11Y-001: Full keyboard accessibility
- ✅ TC-COMP-001: Chrome/Edge compatibility
- ✅ TC-UX-003: Correct Nepali text rendering

### **Should Pass (High Priority):**
- All 14 High priority test cases

### **Can Have Minor Issues (Medium/Low):**
- Medium and Low priority items can have minor issues that don't affect core functionality

---

## 📝 Test Execution Instructions

### **Preparation:**
1. Set up testing environment with required browsers
2. Prepare testing devices (mobile, tablet, desktop)
3. Install necessary testing tools (Lighthouse, axe DevTools)
4. Clear browser cache before each test session

### **Execution:**
1. Execute all Critical tests first
2. Document results in "Actual Result" field
3. Mark each test as Pass/Fail
4. Take screenshots for failed tests
5. Log any bugs or issues found

### **Reporting:**
1. Calculate pass rate by category
2. List all failed tests with details
3. Prioritize bug fixes based on severity
4. Create improvement recommendations

---

## 🔧 Tools Required for Testing

1. **Browser DevTools**
   - Chrome DevTools (Performance, Network, Lighthouse)
   - Firefox Developer Tools
   - Safari Web Inspector

2. **Accessibility Tools**
   - axe DevTools browser extension
   - WAVE accessibility checker
   - Screen readers (NVDA, JAWS, VoiceOver)

3. **Performance Tools**
   - Lighthouse CI
   - WebPageTest
   - GTmetrix

4. **Device Testing**
   - Physical devices or BrowserStack/Sauce Labs
   - Responsive design mode in browsers

---

## ✅ Test Case Completion Checklist

- [ ] All 28 test cases executed
- [ ] Results documented for each test
- [ ] Screenshots captured for failures
- [ ] Performance metrics recorded
- [ ] Lighthouse audit completed
- [ ] Cross-browser testing done
- [ ] Accessibility audit passed
- [ ] Final test report generated

---

*Test Cases Created for Hackathon Week 5 Assignment*
*Date: January 11, 2026*
*Total Test Cases: 28*
