# Component Composition

- children -> ng-content
  - List & ListItem - single children
  - SplitPane (with left and right content) - multiple custom children
- render prop -> ngTemplateOutlet + ng-template
  - List & ListItem
- HOC -> component factory

# LifeCycle Hooks

- ngOnInit, ngAfterViewInit, ngAfterContentInit -> useLayoutEffect []
- ngAfterViewChecked, ngAfterContentChecked, ng -> useEffect []
- ngOnChanges -> useEffect [variableToListenForChanges]
- ngOnDestroy -> useEffect with callback
- ngDoCheck -> useEffect