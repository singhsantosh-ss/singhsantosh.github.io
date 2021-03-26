import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConnectViaComponent } from './connect-via.component';

describe('ConnectViaComponent', () => {
  let component: ConnectViaComponent;
  let fixture: ComponentFixture<ConnectViaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectViaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectViaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
