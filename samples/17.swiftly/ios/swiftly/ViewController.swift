//
//  ViewController.swift
//  swiftly
//
//  Created by Rodrigo Landaeta on 10/11/17.
//  Copyright © 2017 Rodrigo Landaeta. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func loadReactNativeComponent(_ sender: Any) {
        
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let viewController = UIViewController()
        let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "swiftly", initialProperties: nil, launchOptions: nil)
        rootView?.backgroundColor = UIColor(named: "red")
        viewController.view = rootView
        
        self.present(viewController, animated: true, completion: nil)
    }
}

